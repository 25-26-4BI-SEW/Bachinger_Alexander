<script setup>
import axios from "axios";
import {callWithErrorHandling, ref, watch} from "vue";

const props = defineProps({
  domain: String,
});

const ip = ref("");
const country = ref("");
const city = ref("");
const lat = ref("");
const lon = ref("");
const locTime = ref("");
const timezone = ref("");
const sunrise = ref("");
const sunset = ref("");
const weather_time = ref("");
const weather_temp = ref("");
const weather_windS = ref("");
const weather_windD = ref("");

function resetData(caseIndex = 0) {
  switch (caseIndex) {
    case 0:
      ip.value = country.value = city.value = lat.value = lon.value = locTime.value = timezone.value = sunrise.value = sunset.value = weather_temp.value = weather_windS.value = weather_windD.value = "";
      return
    case 1:
      country.value = city.value = lat.value = lon.value = timezone.value = "";
      return;
    case 2:
      sunrise.value = sunset.value = "";
      return;
    case 3:
      weather_temp.value = weather_windS.value = weather_windD.value = "";
      return;
  }
}

async function getIP(domain) {
  if (!domain) return resetData(0);
  try {
    const res = await axios.get('http://www.dns-lg.com/us01/' + domain + '/a');
    // console.log(res.data);
    if (res.data.answer && res.data.answer.length > 0) {
      ip.value = res.data.answer[0].rdata;
      await getLocationData();
    } else {
      resetData(0);
    }
  } catch (e) {
    resetData(0);
  }
}

async function getLocationData() {
  if (!ip.value) return resetData(1);
  try {
    const res = await axios.get('http://ip-api.com/json/' + ip.value);
    if (res.data?.status === "success") {
      country.value = res.data.country || "";
      city.value = res.data.city || "";
      lat.value = res.data.lat || "";
      lon.value = res.data.lon || "";
      timezone.value = res.data.timezone || "";
      try {
        if (timezone.value !== "") {
          locTime.value = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone.value,
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date()) || "";
        }
      } catch {
      }
      if (lat.value === "" || lon.value === "") return resetData(2);
      await getSunData();
      console.log("vor wetter")
      await getCurrentWeather();
      console.log("nach wetter")
    } else {
      resetData(1)
    }
  } catch {
    resetData(1)
  }
}

async function getSunData() {
  try {
    const res = await axios.get(
        'https://api.sunrise-sunset.org/json?lat=' + lat.value + '&lng=' + lon.value);
    if (res.data?.status === "OK") {
      sunrise.value = res.data.results.sunrise || "";
      sunset.value = res.data.results.sunset || "";
    } else {
      resetData(2);
    }
  } catch {
    resetData(2);
  }
}

async function getCurrentWeather() {
  console.log(lat.value);
  console.log(lon.value);
  try {
    const res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat.value}&longitude=${lon.value}&current_weather=true`
    );

    if (res.data?.current_weather) {
      const weather = res.data.current_weather || "";
      console.log(weather);
      weather_time.value = res.data.current_weather.time || "";
      weather_temp.value = res.data.current_weather.temperature || "";
      weather_windS.value = res.data.current_weather.windspeed || "";
      weather_windD.value = res.data.current_weather.winddirection || "";
    } else {
      resetData(3);
    }
  } catch {
    resetData(3);
  }
}

watch(() => props.domain, (newDomain, oldDomain) => {
  if (newDomain !== oldDomain) getIP(newDomain);
});

</script>

<template>
  <div>
    <h2>Data Lookup for {{ props.domain }}</h2>
    <table>
      <tr>
        <td>Ip</td>
        <td v-if='ip === ""' class="noData">No Data found</td>
        <td v-else>{{ ip }}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td v-if='country === ""' class="noData">No Data found</td>
        <td v-else>{{ country }}</td>
      </tr>
      <tr>
        <td>City</td>
        <td v-if='city === ""' class="noData">No Data found</td>
        <td v-else>{{ city }}</td>
      </tr>
      <tr>
        <td>Cords</td>
        <td v-if='lat === "" || lon === ""' class="noData">No Data found</td>
        <td v-else>{{
            lat.toFixed(3) + '° ' + (lat >= 0 ? 'N' : 'S') + ', ' + lon.toFixed(3) + '° ' + (lon >= 0 ? 'E' : 'W')
          }}
        </td>
      </tr>
      <tr>
        <td>LocalTime</td>
        <td v-if='locTime === ""' class="noData">No Data found</td>
        <td v-else>{{ locTime }}</td>
      </tr>
      <tr>
        <td>Timezone</td>
        <td v-if='timezone === ""' class="noData">No Data found</td>
        <td v-else>{{ timezone }}</td>
      </tr>
      <tr>
        <td>Sunrise</td>
        <td v-if='sunrise === ""' class="noData">No Data found</td>
        <td v-else>{{ sunrise }}</td>
      </tr>
      <tr>
        <td>Sunset</td>
        <td v-if='sunset === ""' class="noData">No Data found</td>
        <td v-else>{{ sunset }}</td>
      </tr>
    </table>
    <hr>
    <h3>Weather</h3>
    <div v-if='weather_time !== ""'>State of: {{ weather_time }}</div>
    <br>
    <table>
      <tr>
        <td>Temperature</td>
        <td v-if='weather_temp === ""' class="noData">No Data found</td>
        <td v-else>{{ weather_temp }}°C</td>
      </tr>
      <tr>
        <td>WindSpeed</td>
        <td v-if='weather_windS === ""' class="noData">No Data found</td>
        <td v-else>{{ weather_windS }}km/h</td>
      </tr>
      <tr>
        <td>WindDirection</td>
        <td v-if='weather_windD === ""' class="noData">No Data found</td>
        <td v-else>{{ weather_windD }}°</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.noData {
  color: red;
}
</style>