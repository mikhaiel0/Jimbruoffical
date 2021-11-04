FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/mikhaiel0/Jimbrootan /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/Mikhaiel/files
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
