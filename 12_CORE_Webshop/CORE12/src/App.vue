<template>
    <div class="app">
        <header class="header">
            <router-link to="/">
                <h1>Webshop</h1>
            </router-link>

            <router-link class="add-btn" to="/add">
                Add Product
            </router-link>
        </header>

        <router-view/>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f4f4;
}

a {
    text-decoration: none;
    color: #369f6f;
}

a:hover {
    text-decoration: underline;
    color: #0bd894;
}

.app {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.add-btn {
    background: #42b883;
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: bold;
}

.add-btn:hover {
    background: #369f6f;
}
</style>