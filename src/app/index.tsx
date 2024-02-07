import { FlatList, View } from "react-native";

import { CATEGORIES } from "@/utils/data/products";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";
import { useState } from "react";

export default function Home() {
  let [category, setCategory] = useState(CATEGORIES[0]);

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => setCategory(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
