export default [
    {
        title: "Instagram",
        picture: "/images/lk/instagram.svg",
        pictureGray: "/images/lk/instagram-gray.svg",
        pictureMini: "/images/lk/instagram-mini.svg",
        gradient: ['#FE3A68', '#9B1EB3'],
        id: 1,
        cheatingTypes: [
            {
                title: "Подписка на аккаунт",
                id: 2,
                parentID: 1,
                inflectionForms: ["Подписка", "Подписки", "Подписок"],
                action: "Подписаться на аккаунт",
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 1,
                action: "Лайкнуть пост",
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Сохранение поста",
                id: 5,
                parentID: 1,
                action: "Сохранить пост",
                inflectionForms: ["Сохранение", "Сохранения", "Сохранений"]
            },
            {
                title: "Комментарий",
                id: 3,
                parentID: 1,
                action: "Оставить комментарий под постом",
                inflectionForms: ["Комментарий", "Комментария", "Комментариев"]
            }
        ]
    },
    {
        title: "Vkontakte",
        picture: "/images/lk/vk.svg",
        pictureGray: "/images/lk/vk-gray.svg",
        pictureMini: "/images/lk/vk-mini.svg",
        color: "#4D76A1",
        id: 2,
        cheatingTypes: [
            {
                title: "Подписка на группу",
                id: 2,
                parentID: 2,
                action: "Подписаться на группу",
                inflectionForms: ["Подписка", "Подписки", "Подписок"]
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 2,
                action: "Лайкнуть пост",
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Репост поста",
                id: 6,
                parentID: 2,
                action: "Сделать репост",
                inflectionForms: ["Репост", "Репоста", "Репостов"]
            },
            {
                title: "Комментарий под постом",
                id: 3,
                parentID: 2,
                action: "Оставить комментарий под постом",
                inflectionForms: ["Комментарий", "Комментария", "Комментариев"]
            }
        ]
    },
    {
        title: "Telegram",
        picture: "/images/lk/telegram.svg",
        pictureGray: "/images/lk/telegram-gray.svg",
        pictureMini: "/images/lk/telegram-mini.svg",
        color: "#039BE5",
        id: 3,
        cheatingTypes: [
            {
                title: "Вступление в группу",
                id: 2,
                parentID: 3,
                action: "Вступить в группу",
                inflectionForms: ["Вступление", "Вступления", "Вступлений"]
            },
            {
                title: "Просмотр постов",
                id: 7,
                parentID: 3,
                action: "Просмотреть пост",
                inflectionForms: ["Просмотр", "Просмотра", "Просмотров"]
            },
        ]
    },
    {
        title: "Twitter",
        picture: "/images/lk/twitter.svg",
        pictureGray: "/images/lk/twitter-gray.svg",
        pictureMini: "/images/lk/twitter-mini.svg",
        color: "#03A9F4",
        id: 4,
        cheatingTypes: [
            {
                title: "Подписка",
                id: 2,
                parentID: 4,
                action: "Подписаться",
                inflectionForms: ["Подписка", "Подписки", "Подписок"]
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 4,
                action: "Лайкнуть пост",
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Ретвит поста",
                id: 6,
                parentID: 4,
                action: "Ретвитнуть пост",
                inflectionForms: ["Ретвит", "Ретвита", "Ретвитов"]
            },
        ]
    },
    {
        title: "Facebook",
        picture: "/images/lk/facebook.svg",
        pictureGray: "/images/lk/facebook-gray.svg",
        pictureMini: "/images/lk/facebook-mini.svg",
        color: "#4267B2",
        id: 5,
        noBot: true,
        cheatingTypes: [
            {
                title: "Вступить в группу",
                inflectionForms: ["Вступление", "Вступления", "Вступлений"],
                id: 2,
                action: "Вступить в группу",
                parentID: 5,
            },
        ]
    },
    {
        title: "YouTube",
        picture: "/images/lk/youtube.svg",
        pictureGray: "/images/lk/youtube-gray.svg",
        pictureMini: "/images/lk/youtube-mini.svg",
        color: "#FF0000",
        id: 6,
        noBot: true,
        cheatingTypes: [
            {
                title: "Подписка на канал",
                inflectionForms: ["Подписка", "Подписки", "Подписок"],
                id: 2,
                action: "Подписаться на канал",
                parentID: 6,
            },
            {
                title: "Лайк видео",
                id: 1,
                parentID: 6,
                action: "Лакнуть видео",
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
        ]
    },
    {
        title: "TikTok",
        picture: "/images/lk/tiktok.svg",
        pictureGray: "/images/lk/tiktok-gray.svg",
        pictureMini: "/images/lk/tiktok-mini.svg",
        color: "#222222",
        id: 7,
        noBot: true,
        cheatingTypes: [
            {
                title: "Подписка",
                id: 2,
                parentID: 7,
                action: "Подписаться",
                inflectionForms: ["Подписка", "Подписки", "Подписок"],
            },
            {
                title: "Лайк",
                id: 1,
                parentID: 7,
                action: "Лайкнуть",
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
        ]
    },
]