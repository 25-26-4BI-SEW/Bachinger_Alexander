import {defineStore} from 'pinia'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: crypto.randomUUID(),
                title: 'Schlüsselanhänger',
                price: 10.99,
                description: 'Ein wunderschöner Schlüsselanhänger.',
                image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsequa.shop%2Fcdn%2Fshop%2Fproducts%2Fcustom-leather-keychain-embrace-the-joy-of-personalization-168685.jpg%3Fv%3D1702209493&f=1&nofb=1&ipt=4d60e4c45b7e696756a06174ee9345ee1871ad0a4286ea66da868807d748a394'
            },
            {
                id: crypto.randomUUID(),
                title: 'Stift',
                price: 5.99,
                description: 'Ein wunderschöner Stift.',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.fvC5D5FfME_P9l5rdRRcEwHaE8%3Fpid%3DApi&f=1&ipt=572913bfe410654ff2ab5a9a8b71f2a1648a96815aeb7af5771d0b5a33a12708&ipo=images'
            },
            {
                id: crypto.randomUUID(),
                title: 'Anderer Stift',
                price: 599.99,
                description: 'Ein wunderschöner anderer Stift.',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.fvC5D5FfME_P9l5rdRRcEwHaE8%3Fpid%3DApi&f=1&ipt=572913bfe410654ff2ab5a9a8b71f2a1648a96815aeb7af5771d0b5a33a12708&ipo=images'
            }
        ]
    }),

    actions: {
        addProduct(product) {
            product.id = crypto.randomUUID();
            this.products.unshift({
                ...product,
            });
        },

        deleteProduct(id) {
            this.products = this.products.filter(product => product.id !== id);
        },

        updateProduct(updatedProduct) {
            const index = this.products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) this.products[index] = updatedProduct;
        },

        getProductByID(id) {
            return this.products.find(product => product.id === id);
        }
    }
});