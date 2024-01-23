import { defineStore } from 'pinia';
import axios from 'axios';
import {computed, ref} from "vue";


interface ApiProduct {
    products: IProduct[];
}

interface IProduct {
    title: string;
    description: string;
    price: number;
    images: string[]; // Array of strings
}

export const useProductsStore = defineStore('productsStore', () => {
    const products = ref<IProduct[]>([]);

    async function fetchProducts() {
        try {
            const response = await axios.get<ApiProduct>('https://dummyjson.com/products')
            products.value = response.data.products
        } catch (error) {
            console.log(error)
        }
    }

    const productsList  = computed(() => {
        return products.value.map(product => ({
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.images[0] // First image from the images array
        }));
    });

    return {productsList, fetchProducts}
});
