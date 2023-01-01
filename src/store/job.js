// stores/counter.js
import { defineStore } from 'pinia'

export const useJobStore = defineStore('job', {
    state: () => {
        return {
            jobs: [],
            loading: false
        }
    },
    actions: {
        initialData() {
            this.loading = true;
            setTimeout(() => {
                this.jobs = [
                    {
                        title: 'React Developer',
                        slug: 'react-developer',
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        image: 'https://via.placeholder.com/150',
                        type: 3,
                        price: "$65k-$85k/yr"
                    },
                    {
                        title: 'Android Developer',
                        slug: 'android-developer',
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        image: 'https://via.placeholder.com/150',
                        type: 2,
                        price: "$60k-$80k/yr"
                    },
                    {
                        title: 'IOS Developer',
                        slug: 'ios-developer',
                        image: 'https://via.placeholder.com/150',
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        type: 1,
                        price: "$75k-$90k/yr"
                    },
                    {
                        title: 'Laravel Developer',
                        slug: 'laravel-developer',
                        image: 'https://via.placeholder.com/150',
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        type: 1,
                        price: "$75k-$90k/yr"
                    }
                ];
                this.loading = false;
            }, 500)
        },
    },
})