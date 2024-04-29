# Auth

Auth is a Discord Bot to verify user, giving server owner the ability to pull back members in case of deletetion or forgot login.

# Getting Start

### 1. Create a bot in [Discord Developer Portal](https://discord.com/developers/applications)
Copy TOKEN, CLIENT ID and CLIENT SECRET (Bot Tab, OAuth2 Tab)\
![Discord Token](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/jyu31kgp.png)
![Discord Client](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/ra8aqbp3.png)

> [!CAUTION]
> Please keep the TOKEN and CLIENT SECRET personally, **DO NOT** share to the others.
### 2. Paste your URL to Redirects (OAuth2 Tab)
> [!TIP]
> The URL is formed by (http/https)://(domain)/api/auth/discord/redirect

![Discord OAuth2 Redirect](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/wgpvqcmv.png)
### 3. Enable Intents
![Discord Intents](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/umxiwuxl.png)
### 4. Generate Bot Invite URL (OAuth2 Tab)
Tick these boxes in SCOPES:
- bot
- applications.commands

Tick these boxes in BOT PERMISSIONS:
- Manage Server
- Manage Roles
- Manage Channels
- Create Instant Invite
- Read Messages/View Channels
- Send Messages
- Manage Messages
- Read Message History

> [!IMPORTANT]
> Please make sure your bot has enabled Intents and Permissions mentioned above, or else some functions might not work

Then, use the link at the bottom to invite your bot to Servers.
### 5. Setting up database
Create a [Mongo Database](https://mongodb.com)\
Go to Overview > Data Services > Connect > Drivers.\
Copy the code in Step 3\
![Mongo](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/sowcg1ll.png)
### 6. Choose the host you are using
- [Replit](#Replit)
- [Other Host](#Other-Host)

## Replit
### 7. Create a new project by importing from github
![Replit Import](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/xobwnpi2.png)
### 8. Paste the information you have copied in (1, 2, 5) to Secrets
![Replit Secret](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/fsbokqx9.png)

## Other Host
### 7. Clone the repository and install the dependencies
```cmd
git clone https://github.com/night0721/auth-bot.git
cd auth-bot
npm install
```
### 8. Create a .env file and paste the code below
Replace XXX with the value you have copied in (1, 2, 5)
```Dotenv
TOKEN=XXX
CLIENT_ID=XXX
CLIENT_SECRET=XXX
MONGO=mongodb+srv://XXX
CALLBACK_URL=http://XXX.XXX/api/auth/discord/redirect
PORT=XXX
api=https://api.night0721.xyz
```
![Dotenv File](https://r2.e-z.host/3c62bb3a-a8a9-43f6-afd6-553646f51dc4/3zfp61oy.png)

### 9. Run the server, and now enjoy!
```cmd
npm run dev
```
or click **Start** button for Replit user

> [!NOTE]
> Try running **/setup** command in your server's verify channel, please remember to keep the code sent by your bot for pulling members.

Join our Discord Server for update's news!

## Support

If you need support, you can join the [Discord Server](https://discord.gg/SbQHChmGcp)

## License

This project is licensed under the GNU Public License v3.0. See [LICENSE](https://github.com/night0721/Auth/blob/master/LICENSE) for more information.

## Contribution

If you have any ideas for improvements or new features, please feel free to fork the project and create a pull request or open an issue.
All contributions are welcome, including translations, documentation, and code.
