let rerenderEntireTree = () => {
    console.log('state changed')
}

export let state = {
    posts: [
        {id: 1, img: 'https://abrakadabra.fun/uploads/posts/2022-01/1643457836_1-abrakadabra-fun-p-avatarki-dlya-sobak-1.jpg', post: 'Привет, как дела ?'},
        {id: 2, img: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_28.jpg', post: 'Спасибо, хорошо'},
        {id: 3, img: 'https://shapka-youtube.ru/wp-content/uploads/2021/10/ava-sobaka-v-kapyushone.jpg', post: 'Пока!'}
    ],
    newPostText: '',
    profile: [
        {id: 1, name: 'Дмитрий К.', img: 'https://i.pinimg.com/736x/46/2a/0b/462a0b54123bea84c00e86f3d734aad3.jpg',
            birthday: 'День рождения: 2 января', city: 'Город: Нижнепупинск',
            education: 'Образование: 3 класса церковно-приходской школы'}
    ]
}

export let addPost = () => {
    let newPost = {id: 4, img: '', post: state.newPostText};
    state.posts.push(newPost);
    state.newPostText = '';
    rerenderEntireTree();
}

export let updateNewPostText = (text) => {
    state.newPostText = text;
    rerenderEntireTree();
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

window.state = state;

