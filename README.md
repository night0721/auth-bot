# Auth
Auth is a Discord Bot to verify user, giving server owner the ability to pull back members in case of deletetion or forgot login.

# Getting Start

## Replit
### 1. Create a new project by importing from github
<img alt="Replit Import" height="150px" src="https://cdn.discordapp.com/attachments/837865823225511946/1233747226040471615/getting_start_import.png?ex=662e3824&is=662ce6a4&hm=3d22e6a762c8c5f70f35d430ded0cab9c84cabab94715442348b117cbe9fb77c">
### 2. Add the information below in Secret
<img alt="Replit Secret" height="150px" src="https://cdn.discordapp.com/attachments/837865823225511946/1233737177112772608/getting_start_replit_secret.png?ex=662e2ec8&is=662cdd48&hm=7d4b9f1d678b89bfc37cb1f865c270919710e5fec590a75930948f0df420710f">
---
## Other Host
### 1. Clone the repository and install the dependencies
```cmd
git clone https://github.com/night0721/auth-bot.git
cd auth-bot
npm i
```
### 2. Create a .env file and paste the code below, and replace XXX with valid value 
```Dotenv
TOKEN=XXX
CLIENT_ID=XXX
CLIENT_SECRET=XXX
MONGO=mongodb+srv://XXX
CALLBACK_URL=http://XXX.XXX/api/auth/discord/redirect
PORT=XXX
api=https://api.night0721.xyz
```
<img alt="Dotenv File" width="150px" src="https://cdn.discordapp.com/attachments/837865823225511946/1233738177693352017/getting_start_dotenv.png?ex=662e2fb7&is=662cde37&hm=f62ef3ed8f6920da5acba8bebe6e1e0388def9b1623ffcf573455bc1011d5533">

## Support

If you need support, you can join the [Discord server](https://discord.gg/SbQHChmGcp)

## License

This project is licensed under the GNU Public License v3.0. See [LICENSE](https://github.com/night0721/Auth/blob/master/LICENSE) for more information.

## Contribution

If you have any ideas for improvements or new features, please feel free to fork the project and create a pull request or open an issue.
All contributions are welcome, including translations, documentation, and code.
