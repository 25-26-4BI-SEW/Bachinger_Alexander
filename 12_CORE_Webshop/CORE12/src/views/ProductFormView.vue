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
}

.form {
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-top: 0;
    margin-bottom: 20px;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    border: none;
    background: #42b883;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background: #369f6f;
}
</style>