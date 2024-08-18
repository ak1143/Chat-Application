
export const SampleChats = [
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name : "Abhishek Kshirsagar",
        _id : "1",
        groupChat : false,
        members :["1","2"]
    },
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name : "yash ghugardare",
        _id : "2",
        groupChat : false,
        members :["1","2"]
    }
]

export const SampleUsers = [
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name : "Abhishek Kshirsagar",
        _id : "1",
    },
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
        name : "yash ghugardare",
        _id : "2",
    }
] 

export const sampleNotifications =[
    {
        sender:{
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "Abhishek Kshirsagar",
        },
        _id : "1",
    },
    {
        sender:{
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "yash ghugardare",
        },
        _id : "2",
    }
];

export const sampleMessages = [
    {
        attachments:[
            {
                public_id:"asdasd",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "hey there",
        _id:"sdsgsgsgdr",
        sender:{
            _id:"user._id",
            name:"chaman",
        },
        chat:"chatId",
        createdAt:"2024-08-14T10:41:30.630Z",
    },
    {
        attachments:[
            {
                public_id:"234sdf",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id:"sdsgsgsgsdr2",
        sender:{
            _id:"asda",
            name:"chaman 2",
        },
        chat:"chatId",
        createdAt:"2024-08-14T10:41:30.630Z",
    },
]; 

export const dashboardData = {
    users:[
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "Abhishek Kshirsagar",
            _id : "1",
            username:"abhi",
            friends:20,
            groups:5
       },
       {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "yash ghugardare",
            _id : "2",
            username:"yash",
            friends:10,
            groups:16,
       }
    ],
    chats:[
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "Stalian",
            _id : "1",
            groupChat:false,
            members:[
                {_id:"1",avatar : ["https://www.w3schools.com/howto/img_avatar.png"]},
                {_id:"2",avatar : ["https://www.w3schools.com/howto/img_avatar.png"]}
            ],
            totalMembers:2,
            totalMessages:20,
            creator: {
                name : "Abhishek Kshirsagar",
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"]
            }
        },
        {
            avatar : ["https://www.w3schools.com/howto/img_avatar.png"],
            name : "Royal spartans",
            _id : "2",
            groupChat:true,
            members:[
                {_id:"1",avatar : ["https://www.w3schools.com/howto/img_avatar.png"]},
                {_id:"2",avatar : ["https://www.w3schools.com/howto/img_avatar.png"]}
            ],
            totalMessages:15,
            creator: {
                name : "Abhishek Kshirsagar",
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"]
            }
        }
    ],
    messages:[
        {
            attachments:[],
            content:"hello there what's up",
            _id:"1",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman",
            },
            chat:"chatId",
            groupChat:false,
            createdAt:"2024-02-12T10:41:30.630Z",
        },
        {
            attachments:[
                {
                    public_id:"asdhj 2",
                    url:"https://www.w3schools.com/howto/img_avatar.png"
                }
            ],
            content:"",
            _id:"2",
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Chaman",
            },
            chat:"chatId",
            groupChat:true,
            createdAt:"2024-02-12T10:41:30.630Z",
        }
    ]
}