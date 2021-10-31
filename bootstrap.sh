#! /usr/bin/env bash
set -uxe

# File to boot up basic dependencies for devend
# All tasks should be done without root privilege

# Prerequisite:
# 1. curl
# currently list
# 1. python3
# what the script do not care:
# 1. proxy setting

echo "hello world"

# 1. find out who i am
# I should be a no-root user with own $HOME dir


# 2. install pyenv
#       a. check
#       b. install if none
curl https://pyenv.run | bash
exec $SHELL

#3. install python
pyenv install 

#4. install python modules
pip3 
