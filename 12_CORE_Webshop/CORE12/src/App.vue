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
:root {
    --border: rgba(255, 255, 255, 0.08);
    --border-input: rgba(255, 255, 255, 0.10);
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #0f0f0f;
    color: #e8e8e6;
    transition: background 0.2s, color 0.2s;
}

a {
    text-decoration: none;
    color: #AFA9EC;
    transition: color 0.15s;
}

a:hover {
    color: #CECBF6;
}

.app {
    max-width: 1160px;
    margin: auto;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.header h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: #e8e8e6;
    transition: color 0.15s;
}

.header a:hover h1 {
    color: #7F77DD;
}

.add-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #b7b4e8;
    color: black !important;
    padding: 9px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.15s, transform 0.1s;
}

.add-btn:hover {
    background: #AFA9EC;
}

.add-btn:active {
    transform: scale(0.98);
}
</style>