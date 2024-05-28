import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Body() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.16:8081/api/home?format=json')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    console.error('Error: Data is not an array', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                {posts.map((post, index) => (
                    (index % 2 === 0) ? (
                        <View key={index} style={styles.row}>
                            <Post
                                username={post.username}
                                userUrl={post.userUrl}
                                imageUrl={post.imageUrl}
                                title={post.name}
                                likes={post.likes}
                                postId={post.id}
                            />
                            {(index + 1 < posts.length) && (
                                <Post
                                    username={posts[index + 1].username}
                                    userUrl={posts[index + 1].userUrl}
                                    imageUrl={posts[index + 1].imageUrl}
                                    title={posts[index + 1].name}
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

const Post = ({ username,userUrl,imageUrl, title, likes, postId }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.postContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeDetail', { postId })}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.authorContainer}>
                    <Image style={styles.authorImage} source={userUrl} />
                    <Text style={styles.author}>{username}</Text>
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
