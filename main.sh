#!/bin/bash

 bold=`echo -en "\e[1m"`
 underline=`echo -en "\e[4m"`
 dim=`echo -en "\e[2m"`
 strickthrough=`echo -en "\e[9m"`
 blink=`echo -en "\e[5m"`
 reverse=`echo -en "\e[7m"`
 hidden=`echo -en "\e[8m"`
 normal=`echo -en "\e[0m"`
 black=`echo -en "\e[30m"`
 red=`echo -en "\e[31m"`
 green=`echo -en "\e[32m"`
 orange=`echo -en "\e[33m"`
 blue=`echo -en "\e[34m"`
 purple=`echo -en "\e[35m"`
 aqua=`echo -en "\e[36m"`
 gray=`echo -en "\e[37m"`
 darkgray=`echo -en "\e[90m"`
 lightred=`echo -en "\e[91m"`
 lightgreen=`echo -en "\e[92m"`
 lightyellow=`echo -en "\e[93m"`
 lightblue=`echo -en "\e[94m"`
 lightpurple=`echo -en "\e[95m"`
 lightaqua=`echo -en "\e[96m"`
 white=`echo -en "\e[97m"`
 default=`echo -en "\e[39m"`
 BLACK=`echo -en "\e[40m"`
 RED=`echo -en "\e[41m"`
 GREEN=`echo -en "\e[42m"`
 ORANGE=`echo -en "\e[43m"`
 BLUE=`echo -en "\e[44m"`
 PURPLE=`echo -en "\e[45m"`
 AQUA=`echo -en "\e[46m"`
 GRAY=`echo -en "\e[47m"`
 DARKGRAY=`echo -en "\e[100m"`
 LIGHTRED=`echo -en "\e[101m"`
 LIGHTGREEN=`echo -en "\e[102m"`
 LIGHTYELLOW=`echo -en "\e[103m"`
 LIGHTBLUE=`echo -en "\e[104m"`
 LIGHTPURPLE=`echo -en "\e[105m"`
 LIGHTAQUA=`echo -en "\e[106m"`
 WHITE=`echo -en "\e[107m"`
 DEFAULT=`echo -en "\e[49m"`

checkPKGM() {
  [ -x "$(which $1)" ]
}


clear
echo "_______________________________________________"
echo "|       $blue          Discord bot      $default           |"
echo "|                    maker                    |"
echo "|                    script                   |"
echo "|                                             |"
echo "|        $red     by NameUndefined#5042   $default        |"
echo "_______________________________________________"

echo ""
echo "Hey did you want to ${lightaqua}create$default a new bot, ${lightaqua}run$default a bot or just ${lightred}exit$default ?"
read response

if [ $response == "exit" ]
then
  echo "Exiting..."
  exit
fi

if [ $response == "run" ]
then
  clear
  NODEJS=/usr/bin/node
  if test -f "$NODEJS"; then
    echo "Please input the ${lightpurple}path$default to the main script"
    read mainpath
    clear
    node $mainpath

  else
    echo "Nodejs isn't installed please install it."
  fi
fi


if [ $response == "create" ]
then
    clear
    echo "Please choose a ${lightaqua}name$default for your bot (Don't use spaces)"
    read botname
    clear
    echo "Please imput your ${lightred}token$default here (use CTRL+SHIFT+V to paste into your terminal)"
    read token
    clear
    echo "Please choose your ${lightaqua}prefix${default}"
    read prefix
    clear
    echo "${lightaqua}Creating$default directory system..."
    mkdir $botname
    cd $botname
    echo "{ \"TOKEN\" : \"$token\" }" > token.json
    echo "{ \"PREF\" : \"$prefix\" }" > prefix.json
    cd ..
    mkdir $botname/commands
    mkdir $botname/sources
    cp ressources/Procfile $botname/
    cp -r ressources/sources/imgs $botname/sources/
    sleep 3
    echo "${aqua}Creating$default index file..."
    cp ressources/index.txt $botname/index.js
    sleep 3
    NODEJS=/usr/bin/node
    if test -f "$NODEJS"; then
      echo "${green}Nodejs$default is already installed, skipping installation"

    else
      function apt() {
        clear
        echo "{$aqua}Installing Nodejs"
        sudo apt-get install nodejs
      }

      function  pacm() {
        clear
        echo "{$aqua}Installing Nodejs"
        sudo pacman -S nodejs
      }

      if checkPKGM apt-get ; then apt
      elif checkPKGM pacman ; then pacm

      else
        echo "I didn't found the package manager your using. Please install nodejs manualy" && exit 2
      fi



    fi

    cd $botname
    echo "${aqua}Initating$default npm..."
    npm init -y
    echo "${aqua}Installing$default librairies"
    npm install discord.js fs djs-commands ytdl-core figlet
    clear
    echo "Well done, your bot has been ${lightblue}created$default!!!"
    sleep 3
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
    echo "Type ${lightblue}save$default to save your bot. "
    function selector(){
    read command
    if [ $command == "save" ]
    then
      cp -r $botname/ /home/$LOGNAME/
      rm -rf $botname
      clear
      echo "___________________________________________________"
      echo "| Your bot have been saved into ${lightgreen}/home/$LOGNAME/${botname}$default |"
      echo "___________________________________________________"
      exit
    fi
    echo ""
    cp ressources/commands/$command.js $botname/commands/ && echo "${lightgreen}$command$default command added!" && echo ""
    selector
    }
    selector


fi
