const botConfig = require('./botconfig')
const discord = require("discord.js")
const ytdl =  require('ytdl-core')

const bot = new discord.Client({})

// const guildMem = new discord.GuildMember()


bot.on("ready", async()=>{
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("Blade & Soul")
})


bot.on("message", async message =>{
    const prefix = botConfig.prefix
    let messageArray = message.content.split(" ") // ['!sayd','hello','i'm','Zhu,','and']
    let cmd = messageArray[0]
    let args = messageArray.slice(1).join(' ')

    //saydelete and say
    if (cmd === `${prefix}sayd`){
        message.channel.send(`${args}`)
        message.delete().then(msg =>{console.log(`Deleted message from ${msg.user.username}` )}).catch(console.error)
        return 
    }
    if (cmd === `${prefix}say`){
       return  message.channel.send(`${args}`)
    }

    //server infor

    if (cmd === `${prefix}svinfo`){
        let sicon = message.guild.displayAvatarURL;
        let serverEmbed = new discord.RichEmbed()
        .setColor('#15f153')
        .setDescription("Server's Information")
        .setThumbnail(sicon)
        .addField('Server Name ',`${message.guild.name}`)
        .addField('Create On ',`${message.guild.createdAt}`)
        .addField('You Join At ',`${message.member.joinedAt}`)
        .addField('Total Member ',`${message.guild.memberCount}`)

        return message.channel.send(serverEmbed)
        // return console.log(sicon)
    }
    

    //bot infor
    if (cmd === `${prefix}botinfo`){
        let bion = bot.user.displayAvatarURL;
        let botembed = new discord.RichEmbed()
        .setDescription("Bot's Information")
        .setThumbnail(bion)
        .setColor('#15f153')
        .addField('Bot Name',`${bot.user.username}`)
        .addField('Created On',`${bot.user.createdAt}`)
        
        return message.channel.send(botembed)

     }

     if (cmd ==`${prefix}setRole`){
      
        if(args===`Prison`){
            message.member.addRole(`606321069682327594`)
            .then(console.log)
            .catch(console.error);
            message.channel.send("Prison added")
        }else if(args===`Prison2`){
            message.member.addRole(`606338882975432705`)
            .then(console.log)
            .catch(console.error);
            message.channel.send("Pison2 added")
        }
        else{
            return(message.channel.send(`${args} is not exist!`))
        }
      
     
     }
     if (!message.content.startsWith(prefix)) return;
     if (message.author.bot) return;

     // Bot Play Music
     
}


)
bot.on("guildMemberAdd",member=>{
    var channelName = "thong-bao"
    var messagee = ('User ' + member.user.username+member.user.tag +' has joined the server!')
    const channel = bot.channels.find('name',channelName)
    channel.send(messagee)
    var role = member.guild.roles.find('name','Sida')
    member.addRole(role)
})


bot.login (botConfig.token)

