<script setup>
import {ref, watch} from "vue";
import axios from "axios";

const props = defineProps({domain: String});

const loading = ref(false);
const error = ref("");

const ip = ref("");
const country = ref("");
const city = ref("");
const lat = ref(null);
const lon = ref(null);
const locTime = ref("");
const timezone = ref("");
const sunrise = ref("");
const sunset = ref("");
const weather_time = ref("");
const weather_temp = ref("");
const weather_windS = ref("");
const weather_windD = ref("");

function resetAll() {
  ip.value = country.value = city.value = locTime.value = timezone.value = sunrise.value = sunset.value = weather_time.value = weather_temp.value = weather_windS.value = weather_windD.value = "";
  lat.value = lon.value = null;
  error.value = "";
}

watch(() => props.domain, async (newDomain) => {
      resetAll();
      if (!newDomain) return;
      loading.value = true;
      try {
        await fetchIP(newDomain);
      } catch (e) {
        error.value = e.message || "An unexpected error occurred.";
      } finally {
        loading.value = false;
      }
    }
);

async function fetchIP(domain) {
  try {
    const res = await axios.get('http://www.dns-lg.com/us01/' + domain + '/a');
    if (!res.data.answer || res.data.answer.length === 0)
      throw new Error("No IP address found for this domain.");

    ip.value = res.data.answer[0].rdata;
    await fetchLocation(ip.value);
  } catch {
    throw new Error("Unable to resolve domain to IP.");
  }
}

async function fetchLocation(ipAddr) {
  const res = await axios.get('https://ipapi.co/' + ipAddr + '/json/');
  if (!res.data || res.data.error) throw new Error("Location not found.");

  country.value = res.data.country_name || "";
  city.value = res.data.city || "";
  lat.value = res.data.latitude || 0;
  lon.value = res.data.longitude || 0;
  timezone.value = res.data.timezone || "";

  try {
    locTime.value = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone.value,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  } catch {
    locTime.value = "";
  }

  await fetchSun(lat.value, lon.value);
  await fetchWeather(lat.value, lon.value);
}

async function fetchSun(lat, lon) {
  const res = await axios.get('https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lon + '&formatted=0');
  if (res.data.status !== "OK") throw new Error("Sunrise/sunset not found.");
  sunrise.value = new Date(res.data.results.sunrise).toLocaleTimeString();
  sunset.value = new Date(res.data.results.sunset).toLocaleTimeString();
}

async function fetchWeather(lat, lon) {
  const res = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current_weather=true');
  const weather = res.data?.current_weather; // ?: If res.data exist --> Access of .current_weather
  if (!weather) throw new Error("Weather data unavailable.");

  weather_time.value = weather.time || "";
  weather_temp.value = weather.temperature || "";
  weather_windS.value = weather.windspeed || "";
  weather_windD.value = weather.winddirection || "";
}
</script>

<template>
  <div>
    <h2 v-if="props.domain">Lookup for {{ props.domain }}</h2>
    <div v-if="loading">Loading data...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <table v-else-if="ip">
      <tr>
        <td>IP</td>
        <td>{{ ip }}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{{ country || 'No Data' }}</td>
      </tr>
      <tr>
        <td>City</td>
        <td>{{ city || 'No Data' }}</td>
      </tr>
      <tr>
        <td>Coordinates</td>
        <td v-if="lat && lon">
          {{ lat.toFixed(3) }}° {{ lat >= 0 ? 'N' : 'S' }},
          {{ lon.toFixed(3) }}° {{ lon >= 0 ? 'E' : 'W' }}
        </td>
        <td v-else>No Data</td>
      </tr>
      <tr>
        <td>Local Time</td>
        <td>{{ locTime || 'No Data' }}</td>
      </tr>
      <tr>
        <td>Timezone</td>
        <td>{{ timezone || 'No Data' }}</td>
      </tr>
      <tr>
        <td>Sunrise</td>
        <td>{{ sunrise || 'No Data' }}</td>
      </tr>
      <tr>
        <td>Sunset</td>
        <td>{{ sunset || 'No Data' }}</td>
      </tr>
    </table>

    <div v-if="ip" class="weather">
      <h3>Weather</h3>
      <p v-if="weather_time">At: {{ weather_time }}</p>
      <table>
        <tr>
          <td>Temperature</td>
          <td>{{ weather_temp || '-' }} °C</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{{ weather_windS || '-' }} km/h</td>
        </tr>
        <tr>
          <td>Wind Direction</td>
          <td>{{ weather_windD || '-' }}°</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  margin: 1rem 0;
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  width: 100%;
  max-width: 500px;
}

td {
  border-bottom: 1px solid #ccc;
  padding: 0.3rem 0.6rem;
}

.weather {
  margin-top: 1.5rem;
}
</style>