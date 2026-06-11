<template>
    <div class="notfound-container">
        <h1>404 – Page not found</h1>
        <p>The requested page does not exist.</p>
        <a class="back-home" href="/">Back to homepage</a>
    </div>
</template>

<style scoped>
.notfound-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

.back-home {
    margin-top: 1rem;
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
}
</style>