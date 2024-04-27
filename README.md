# Auth

Auth is a Discord Bot to verify user, giving server owner the ability to pull back members in case of deletetion or forgot login.

# Getting Start

### 1. Create a bot and copy TOKEN, CLIENT ID and CLIENT SECRET in [Discord Developer Portal](https://discord.com/developers/applications) (Bot Tab, OAuth2 Tab)
![Discord Token](https://cdn.discordapp.com/attachments/837865823225511946/1233736241376137216/getting_start_token.png?ex=662e2de9&is=662cdc69&hm=a1199ad3f800c61f5b6686a6279e93962db3046bd78e194d1643cbeafcf1c6df)
![Discord Client](https://cdn.discordapp.com/attachments/837865823225511946/1233736241040850984/getting_start_client.png?ex=662e2de9&is=662cdc69&hm=31b6679d650abf2706fd9c1994e8844a91904c13cf33bfee527796ff105ee027)

> [!CAUTION]
> Please keep the TOKEN and CLIENT SECRET personally, **DO NOT** share to the others.
### 2. Paste your URL to Redirects (OAuth2 Tab)
> [!TIP]
> The URL is formed by (http/https)://(domain)/api/auth/discord/redirect

![Discord OAuth2 Redirect](https://cdn.discordapp.com/attachments/837865823225511946/1233831446892908555/getting_start_oauth2_redirect.png?ex=662e8694&is=662d3514&hm=920470adcbac743c5429ac552808aea9412441d5494db9d6aa82f2517ea9a474)
### 3. Enable Intents
![Discord Intents](https://cdn.discordapp.com/attachments/837865823225511946/1233734791698972702/getting_start_intents.png?ex=662e2c90&is=662cdb10&hm=aa39490e9a2488806e8c809e207384b37207aaa6047367e436b5c89409cda19b)
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
Create a [Mongo Database](https://mongodb.com)
Go to Overview > Data Services > Connect > Drivers.
Copy the code in Step 3\
![Mongo](https://cdn.discordapp.com/attachments/837865823225511946/1233734792621723738/getting_start_mongo.png?ex=662e2c90&is=662cdb10&hm=27b9e02e2b8268d551010f0ed67536c74b49f012ca4c2ee330f6f7e591e6b7d2)
### 6. Choose the host you are using
- [Replit](#Replit)
- [Other Host](#Other-Host)

## Replit
### 7. Create a new project by importing from github
![Replit Import](https://cdn.discordapp.com/attachments/837865823225511946/1233748914897686528/getting_start_import.png?ex=662e39b7&is=662ce837&hm=1823173d343f2d963a312398f099f21e4413a68aea718e8c6cd63c029e80577d)
### 8. Paste the information you have copied in (1, 2, 5) to Secrets
![Replit Secret](https://cdn.discordapp.com/attachments/837865823225511946/1233737177112772608/getting_start_replit_secret.png?ex=662e2ec8&is=662cdd48&hm=7d4b9f1d678b89bfc37cb1f865c270919710e5fec590a75930948f0df420710f)

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
![Dotenv File](https://cdn.discordapp.com/attachments/837865823225511946/1233738177693352017/getting_start_dotenv.png?ex=662e2fb7&is=662cde37&hm=f62ef3ed8f6920da5acba8bebe6e1e0388def9b1623ffcf573455bc1011d5533)

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
