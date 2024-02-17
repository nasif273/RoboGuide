import React from 'react';
import './product1.css'; // Import CSS file for styling

function Product1() {
  return (
    <div className="product1">
      <h2 className="product1__title">Laser protection security system with Arduino</h2>
      <p className="product1__description">
        Hello and welcome back. In this project, we will learn how to make a Laser protection security system with Arduino. For that, I have mainly used the Nodemcu ESP8266 board, Laser module, and LDR sensor module. These components will work together to ensure the security of your space.  Also, using this system we can get the security alert to your telegram app. One of the standout features of this system is its ability to keep you informed and alert in real-time. It has the capability to send security alerts directly to your Telegram app, which is a fantastic way to stay updated on any security events. I think that’s a good point.  Additionally, I have used the buzzer and LED bulb to indicate the security alerts. A buzzer has been included to provide audible notifications, and an LED bulb will flash to visually indicate security alerts.
      </p>
      <p>Components</p>
      <ul>
        <li>Nodemcu ESP8266 board</li>
        <li>Laser module</li>
        <li>LDR sensor module</li>
        <li>LED bulb</li>
        <li>100 Ohm resistor</li>
        <li>Buzzer</li>
        <li>Breadboard</li>
        <li>Jumper wires</li>
      </ul>

      <br /><br />

      <div>
        <pre>
          <code>
            {`
            #include <ESP8266WiFi.h>
            #include <WiFiClientSecure.h>
            #include <UniversalTelegramBot.h>
            #include <ArduinoJson.h>

            const char* ssid = "************";
            const char* password = "**************";

            #define BOTtoken "***********************"
            #define CHAT_ID "**********"

            #define LED D4
            #define Buzzer D3
            #define LReceiver D5
            #define Laser D6

            X509List cert(TELEGRAM_CERTIFICATE_ROOT);
            WiFiClientSecure client;
            UniversalTelegramBot bot(BOTtoken, client);

            void setup() {
              Serial.begin(115200);
              configTime(0, 0, "pool.ntp.org");// get UTC time via NTP
              client.setTrustAnchors(&cert); // Add root certificate for api.telegram.org

              pinMode(LReceiver, INPUT);
              pinMode(LED, OUTPUT);
              pinMode(Laser, OUTPUT);
              pinMode(Buzzer, OUTPUT);
              digitalWrite(Laser, HIGH);

              WiFi.mode(WIFI_STA);
              WiFi.begin(ssid, password);
              while (WiFi.status() != WL_CONNECTED) {
                Serial.print(".");
                delay(500);
              }
              Serial.print("\nWiFi connected. IP address: ");
              Serial.println(WiFi.localIP());
              bot.sendMessage(CHAT_ID, "System is Ready", "");
              delay(1000);
            }

            void loop() {
              bool value = digitalRead(LReceiver);
              Serial.println(value);
              if (value == 1) {
                digitalWrite(LED, HIGH);
                digitalWrite(Buzzer, HIGH);
                bot.sendMessage(CHAT_ID, "Warning!", "");
              } else if (value == 0) {
                digitalWrite(LED, LOW);
                digitalWrite(Buzzer, LOW);
              }
            }
            `}
          </code>
        </pre>
      </div>

      <br /><br />
    </div>
  );
}

export default Product1;
