#!/bin/bash
set -e

sudo apt update
sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt install nodejs curl -y

cd /home/ubuntu
git clone https://github.com/Shadi-Almohtaseb/Books-API.git app
cd app && npm install
npm run build

sudo mv ./infrastructure/app.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable app.service
sudo reboot




# #!/bin/sh
# set -e

# sudo apt update
# sudo apt upgrade -y

# # install nodejs repo
# curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# sudo apt install nodejs jq curl -y

# # create app & github users
# sudo useradd --system --create-home --shell /usr/sbin/nologin app
# sudo useradd -g app --no-create-home --no-user-group --home-dir /home/app --shell /bin/bash github
# sudo usermod --append --groups app github

# # deploy app
# repo="Shadi-Almohtaseb/Books-API"
# download_url=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].browser_download_url')
# asset_name=$(curl "https://api.github.com/repos/$repo/releases/latest" | jq --raw-output '.assets[0].name')

# curl -O "https://raw.githubusercontent.com/khaledez/echoinfo/main/infrastructure/app.service"
# sudo mv app.service /etc/systemd/system/
# sudo systemctl daemon-reload
# sudo systemctl enable app.service

# sudo -u app sh -c "mkdir -p /home/app/app && cd /home/app/app && curl -LO $download_url && mv $asset_name app.tar.gz"
# sudo -u app sh -c "cd /home/app/app && tar xzvf app.tar.gz"
# sudo -u app sh -c "cd /home/app/app && npm install"

# sudo reboot