const express = require('express');
const app = express();
const PORT = 3000;

// สร้างข้อมูลอาร์เรย์ของโพสต์
const posts = [
    {
        id: 1,
        imageUrl: "https://i.pinimg.com/564x/bd/d6/92/bdd692e59341b678c2e96c06568460c1.jpg",
        title: 'Ootd!',
        likes: 999
    },

    {
        id: 2,
        imageUrl: "https://i.pinimg.com/564x/fd/7f/a2/fd7fa21dcc5ff4247f2e9d5b8f462a49.jpg",
        title: 'Everyday Makeup',
        likes: 1001
    },

    {
        id: 3,
        imageUrl: "https://i.pinimg.com/736x/ab/b2/2b/abb22bb96e4823c8fe2449d5ac531329.jpg",
        title: 'Skincare Routine',
        likes: 895
    },
    {
        id: 4,
        imageUrl: "https://i.pinimg.com/564x/9b/d8/86/9bd8864f07b96a3d6c5653e2c1dd810b.jpg",
        title: 'Fav Liptint',
        likes: 1500
    }
];

// เส้นทาง GET เพื่อดึงข้อมูลโพสต์ทั้งหมด
app.get('/posts', (req, res) => {
    res.json(posts);
});

// เส้นทาง GET เพื่อดึงข้อมูลโพสต์ตาม ID
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404).send('Post not found');
    } else {
        res.json(post);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// link : http://localhost:3000/posts

