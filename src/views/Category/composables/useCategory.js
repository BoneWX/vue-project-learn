// 封装分类数据
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (currtId = route.params.id) => {
        const res = await getCategoryAPI(currtId);
        categoryData.value = res.data.result;
    };
    onMounted(() => getCategory());
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return categoryData
}