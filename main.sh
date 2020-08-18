#!/bin/sh


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
    echo "Please imput your token here (use CTRL+SHIFT+V to paste into your terminal)"
    read token
    clear
    echo "Please choose your prefix"
    read prefix
    clear
    echo "Creating directory system..."
    mkdir BOT
    cd BOT
    echo "{ \"TOKEN\" : \"$token\" }" > token.json
    echo "{ \"PREF\" : \"$prefix\" }" > prefix.json
    cd ..
    mkdir BOT/commands
    mkdir BOT/sources
    cp ressources/Procfile BOT/
    cp -r ressources/sources/imgs BOT/sources/
    sleep 3
    echo "Creating index file..."
    cp ressources/index.txt BOT/index.js
    sleep 3
    echo "Installing nodejs using yay -S nodejs... (If already install use CTRL+C to cancel installation)"
    sudo pacman -S nodejs -y
    cd BOT
    echo "Initing npm..."
    npm init -y
    echo "Installing librairies"
    npm install discord.js fs djs-commands ytdl-core figlet
    clear
    echo "Well done, your bot has been created!!!"
    sleep 5
    clear
    echo "_______________________________________________"
    echo "|                   Please                     |"
    echo "|               choose your commands           |"
    echo "_______________________________________________"
    echo ""
    cd ..
    cat ressources/cmds.txt
    echo ""
    echo "What command do you want on your bot ? (Please only give the name of the command and not her number.)"
    echo "Type 'save' to save your bot. "
    function selector(){
    read command
    if [ $command == "save" ]
    then
      cp -r BOT/ /home/$LOGNAME/
      rm -rf BOT
      clear
      echo "___________________________________________________"
      echo "| Your bot have been saved into /home/$LOGNAME/BOT |"
      echo "___________________________________________________"
      exit
    fi
    cp ressources/commands/$command.js BOT/commands/ && echo "$command command added!"
    selector
    }
    selector





fi
