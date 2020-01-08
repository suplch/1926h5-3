var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join("| "); %>', {people: people});

    let ret = ejs.render('<%= name + "," + age %>', {name: 'zhang', age: 18});
    console.log(ret);

    console.log(html);


    let ht = ejs.render(`
        <% if (age < 18) { %>
            <h1>未成年</h1>
        <% } else { %>
            <h1>已经成年</h1>
        <% } %>
    `, {name: 'zhang', age: 19});

    console.log(ht);

    const hobbies = [
        '打游戏',
        '睡觉',
        '学习'
    ]

    let ul = ejs.render(`
        <ul>
            <% for (let i = 0; i < hobbies.length; i++) { %>
                <li><%= hobbies[i] %></li>
            <% } %>
        </ul>
    `, {hobbies: hobbies});

    console.log(ul)