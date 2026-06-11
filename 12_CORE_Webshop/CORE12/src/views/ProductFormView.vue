<script setup>
import {computed, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useProductStore} from '../stores/products';

const route = useRoute();
const router = useRouter();
const store = useProductStore();

const isEditing = computed(() => !!route.params.id);
// checks whether the route params id is a truthy value

const existingProduct = isEditing.value ? store.getProductByID(route.params.id) : null;

const form = reactive({
    id: existingProduct?.id || null,
    title: existingProduct?.title || '',
    price: existingProduct?.price || '',
    image: existingProduct?.image || '',
    description: existingProduct?.description || ''
});

function saveProduct() {
    if (isEditing.value) {
        store.updateProduct({
            ...form,
            price: Number(form.price)
        });
    } else {
        store.addProduct({
            ...form,
            price: Number(form.price)
        });
    }

    router.push('/');
}
</script>

<template>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="saveProduct">
            <h2>
                {{ isEditing ? 'Edit Product' : 'Add Product' }}
            </h2>

            <input v-model="form.title" placeholder="Title" required type="text"/>

            <input v-model="form.price" min="0" placeholder="Price" required step="0.01" type="number"/>

            <input v-model="form.image" placeholder="Image URL" required type="text"/>

            <textarea v-model="form.description" placeholder="Description" required rows="5"></textarea>

            <button type="submit">
                Save
            </button>
        </form>
    </div>
</template>

<style scoped>
.form-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 1rem;
}

.form {
    width: 100%;
    max-width: 480px;
    background: #1c1c1c;
    color: #dcdcdc;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

h2 {
    margin: 0 0 1.5rem;
    font-size: 18px;
    font-weight: 500;
}

input,
textarea {
    width: 100%;
    padding: 10px 12px;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    color: black;
    font-size: 15px;
    font-family: inherit;
    transition: border-color 0.15s, box-shadow 0.15s;
    outline: none;
    box-sizing: border-box;
}

input:focus,
textarea:focus {
    border-color: #534AB7;
    box-shadow: 0 0 0 3px rgba(83, 74, 183, 0.12);
}

textarea {
    resize: vertical;
    line-height: 1.6;
}

button {
    width: 100%;
    padding: 11px;
    border: none;
    background: #534AB7;
    color: #fff;
    font-size: 15px;
    font-family: inherit;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
}

button:hover {
    background: #3C3489;
}

button:active {
    transform: scale(0.98);
}
</style>