// function fot toggling the navigation bar
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


// the story part of the website
const story = [
    {
        title: "Ponder",
        content: "A Fairytale Story",
    },
    {
        content: 'Once upon a time high in the misty sky, a place above the ground, is three friends: Wind, Rain and Cloud. They spent their days drifting together, playing games, and the watching the world the below them. Full of beautifully crafted houses, buildings and things. Where people live and use for a purpose. To be sheltered and to be protect. '
        
    },
    {
        content: 'But something felt... off. They did not know why they existed or what they were meant to do. One day, Wind sighed and asked, "Why do you think we exist? What is our purpose?" Rain, the jolliest one out of the three friends, frowned. Replied, "I did not think of it, I do not know. What I do know, is I just fall, but other then that, I do not know why."Cloud puffed up, confused. “I float, but what’s the point?” ',
    },
    {
        content: 'They decided to find answers. Together, they drifted across the sky, asking everyone they met. They first went asking the brightness star. The Sun, it smiled and said nothing. Then they went to the most beautiful in the beyond the sky. The Stars, they twinkled but stayed silent.The Moon saw and heard the three friends walking and talking side by side. It then when down to them, and whispered "You will find your purpose when you need it the most." The three friends did not understand. They continued their search for answers.'
    },
    {
        content: 'One day, as they were playing, they notice a dry place beneath them. A land full of brown grass, instead of those green grass. A land that has cracked on them, rather than those smooth and life to be seen. A land, where flowing waters for animals are no where to be seen. Animals were laying down, weaken by the heat wave. Wind suddenly felt sorrow within their heart. "We have to do something!" Wind exclaimed. "We cannot just leave them here, like that!"Rain hesitated and asked, "But how? How are we suppose to help them?" Cloud, with their bubbling thoughts, said, "We can help them!" '
    },
    {
        content: "Wind below gently, cooling the air for the animals and plants. Rain fell softly, refreshing the ground. Cloud floated and spread through the sky, shading the land from the hot sun. The grass eventually turned back to fresh grass, the rivers flowing with water, and the animals were back to their strong and happy life. The three friends looked at each other, and finally understood what their existed is for. The purpose of the Wind is to being change and movement to the environment. The purpose of Rain is to give life and growth. While the purpose of the Cloud is to protect and provide. They were not just drifting. They were needed, in every way.",
    },
    {
        content: "From that day on, they worked together, helping the world below. And whenever they felt unsure, they remembered the dry land and the lives they saved. They had found their worth. And that was the greatest magic of all.",
    },
    {
        title: "The End",
    },
];

let chapter = 0;

function Story() {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    title.textContent = story[chapter].title;
    content.textContent = story[chapter].content;

    document.getElementById("prev-button").disabled = chapter === 0;
    document.getElementById("next-button").disabled = chapter === story.length - 1;
}

function next() {
    if (chapter < story.length - 1) {
        chapter++;
        Story();
    }
}

function prev() {
    if (chapter > 0) {
        chapter--;
        Story();
    }
}

story();