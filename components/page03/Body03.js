import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Body03() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.16:8080/api/?format=json')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        {posts.map((post, index) => (
          (index % 2 === 0) ? (
            <View key={index} style={styles.row}>
              <Post
                imageUrl={post.imageUrl}
                title={post.name}
                //username={post.username}
                likes={post.likes}
                postId={post.id}
              />
              {(index + 1 < posts.length) && (
                <Post
                  imageUrl={posts[index + 1].imageUrl}
                  title={posts[index + 1].name}
                  //username={posts[index + 1].username}
                  likes={posts[index + 1].likes}
                  postId={posts[index + 1].id}
                />
              )}
            </View>
          ) : null
        ))}
      </View>
    </ScrollView>
  );
}

const Post = ({ imageUrl, title, likes, postId }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.postContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { postId })}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.authorContainer}>
          <Image style={styles.authorImage} source={{ uri: "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg" }} />
          <Text style={styles.author}>PrettyKitten</Text>
          <FontAwesome name="heart" size={15} color="red" style={{ marginTop: 7, marginLeft: 15 }} />
          <Text style={styles.likes}>{likes}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  postContainer: {
    flexDirection: 'column',
    width: '45%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  author: {
    marginTop: 5,
  },
  likes: {
    marginTop: 5,
    marginLeft: 5,
  },
});



// export default function Body03() {
//     pic = "https://i.pinimg.com/564x/c5/3b/5b/c53b5b3465aa45fcf3d2ee1d3132fd51.jpg"
//     return (
//         <View>
//             <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                 <View style={{ padding: 10 }}>
//                     {/* View ก้อนที่ 1 */}
//                     <View style={{ flex: 1, flexDirection: "columns" }}>
//                         <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/bd/d6/92/bdd692e59341b678c2e96c06568460c1.jpg"}} />
//                     </View>
//                     {/* View ก้อนที่ 3 */}
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ fontSize: 20 }}>Ootd!</Text>
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
//                         <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>999</Text>
//                     </View>
//                 </View>
//                 <View style={{ padding: 10 }}>
//                     {/* View ก้อนที่ 1 */}
//                     <View style={{ flex: 1, flexDirection: "columns" }}>
//                         <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/fd/7f/a2/fd7fa21dcc5ff4247f2e9d5b8f462a49.jpg"}} />
//                     </View>
//                     {/* View ก้อนที่ 3 */}
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ fontSize: 20 }}>Everyday Makeup</Text>
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
//                         <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>1001</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                 <View style={{ padding: 10 }}>
//                     {/* View ก้อนที่ 1 */}
//                     <View style={{ flex: 1, flexDirection: "columns" }}>
//                         <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/736x/ab/b2/2b/abb22bb96e4823c8fe2449d5ac531329.jpg"}} />
//                     </View>
//                     {/* View ก้อนที่ 3 */}
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ fontSize: 20 }}>Skincare Routine</Text>
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
//                         <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>895</Text>
//                     </View>
//                 </View>
//                 <View style={{ padding: 10 }}>
//                     {/* View ก้อนที่ 1 */}
//                     <View style={{ flex: 1, flexDirection: "columns" }}>
//                         <Image style={{ width: 200, height: 250, borderRadius: 5 }} source={{uri : "https://i.pinimg.com/564x/9b/d8/86/9bd8864f07b96a3d6c5653e2c1dd810b.jpg"}} />
//                     </View>
//                     {/* View ก้อนที่ 3 */}
//                     <View style={{ marginTop: 10 }}>
//                         <Text style={{ fontSize: 20 }}>Fav Liptint</Text>
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Image style={{ width: 40, height: 40, borderRadius: 50 / 2, marginTop: 5 }} source={{uri : pic}} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>PrettyKitten</Text>
//                         <FontAwesome name="heart" size={15} color="red" marginTop={27} marginLeft={15} />
//                         <Text style={{ padding: 5, marginTop: 20 }}>1500</Text>
//                     </View>
//                 </View>
//             </View>
//         </View>

//     );
// }
