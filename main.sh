clear
echo "_______________________________________________"
echo "|                 Discord bot                 |"
echo "|                    maker                    |"
echo "|                    script                   |"
echo "|                                             |"
echo "|             by NameUndefined#5042           |"
echo "_______________________________________________"

echo ""
echo "Hey did you want to create a new bot ? (Y/n)"
read response

if [ $response == "n" ]
then
  echo "Exiting..."
  exit
fi

if [ $response == "y" ]
then
    clear
    echo "Creating directory system..."
    mkdir BOT
    mkdir BOT/commands
    mkdir BOT/sources
    echo "Creating index file..."
    cp ressources/index.txt BOT/index.js
    echo "Installing nodejs using yay -S nodejs..."
    sudo pacman -S nodejs -y
    cd BOT
    echo "Initing npm..."
    npm init -y
    echo "Installing librairies"
    npm install discord.js fs djs-commands
    clear
    echo "Well done, your bot has been created!!!"
    sleep 5
    clear
    exit


fi
