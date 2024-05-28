import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@data";

// อ่านข้อมูล
const readItem = async () => {
    try {
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let item = string_value != null ? JSON.parse(string_value) : {};
        return item;
    } catch (error) {
        console.log(error);
    }
};

// เขียนข้อมูล
const writeItem = async (data) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

export default { readItem, writeItem };
