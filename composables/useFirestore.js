// composables/useFirestore.js
import { ref } from 'vue'
import { useNuxtApp } from '#app'
import { collection, getDocs, doc } from 'firebase/firestore'

export const useFirestore = () => {
    const { $firestore } = useNuxtApp()
    const customers = ref([])
    const tanks = ref([])

    const fetchCustomers = async () => {
        const querySnapshot = await getDocs(collection($firestore, 'customers'))
        customers.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }

    const fetchCustomerTanks = async (customerId) => {
        tanks.value = []
        const tanksCollection = collection($firestore, `customers/${customerId}/tanks`)
        const querySnapshot = await getDocs(tanksCollection)
        tanks.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    }

    return {
        customers,
        tanks,
        fetchCustomers,
        fetchCustomerTanks
    }
}
