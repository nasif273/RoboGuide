import React from "react";
import "./product1.css"; // Import CSS file for styling

function Product1() {
  return (
    <div className="product1">
      <h2 className="product1__title">Automatic Bridge Control System</h2>
      <p className="product1__description">
        A bascule bridge controlled by Arduino is a type of movable bridge that
        uses a counterweight and a pivot mechanism to raise and lower a roadway
        section, allowing boats or other watercraft to pass underneath. Arduino,
        a microcontroller platform, can be used to automate the operation of the
        bridge, controlling motors or actuators to raise and lower the bridge at
        specific times or in response to certain conditions. This automation can
        improve efficiency and safety by reducing the need for manual operation
        and enabling integration with sensors or timers for precise control.
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

      <br />
      <br />

      <div>
        <pre>
          <code>
            {`
            #include <Servo.h>

            const int trigPin_B_L = 52;
            const int echoPin_B_L = 53;
            const int trigPin_B_R = 50;
            const int echoPin_B_R = 51;
            const int trigPin_R_L = 48;
            const int echoPin_R_L = 49;
            const int trigPin_R_R = 46;
            const int echoPin_R_R = 47;
            
            Servo servo_B_L;
            Servo servo_B_R;
            Servo servo_R_R1;
            Servo servo_R_R2;
            Servo servo_R_L1;
            Servo servo_R_L2;
            
            int servoPin_B_L = 2;
            int servoPin_B_R = 3;
            int servoPin_R_R1 = 4;
            int servoPin_R_R2 = 5;
            int servoPin_R_L1 = 6;
            int servoPin_R_L2 = 7;
            
            const int ledPin_R_R_G = 40;
            const int ledPin_R_R_R = 39;
            const int ledPin_R_L_G = 38;
            const int ledPin_R_L_R = 37;
            const int ledPin_B_R_G = 36;
            const int ledPin_B_R_R = 35;
            const int ledPin_B_L_G = 34;
            const int ledPin_B_L_R = 33;
            
            // Enumeration for different states of the bridge
            enum BridgeState {
              BRIDGE_CLOSED,
              BRIDGE_OPEN
            };
            
            // Initialize the bridge state
            BridgeState bridgeState = BRIDGE_CLOSED;
            
            void setup() {
              Serial.begin(9600);
            
              pinMode(trigPin_B_L, OUTPUT);
              pinMode(echoPin_B_L, INPUT);
            
              pinMode(trigPin_B_R, OUTPUT);
              pinMode(echoPin_B_R, INPUT);
            
              pinMode(trigPin_R_L, OUTPUT);
              pinMode(echoPin_R_L, INPUT);
            
              pinMode(trigPin_R_R, OUTPUT);
              pinMode(echoPin_R_R, INPUT);
            
              pinMode(ledPin_R_R_G, OUTPUT);
              pinMode(ledPin_R_R_R, OUTPUT);
              pinMode(ledPin_R_L_G, OUTPUT);
              pinMode(ledPin_R_L_R, OUTPUT);
              pinMode(ledPin_B_R_G, OUTPUT);
              pinMode(ledPin_B_R_R, OUTPUT);
              pinMode(ledPin_B_L_G, OUTPUT);
              pinMode(ledPin_B_L_R, OUTPUT);
            
            
              servo_B_L.attach(servoPin_B_L);
              servo_B_R.attach(servoPin_B_R);
              servo_R_R1.attach(servoPin_R_R1);
              servo_R_R2.attach(servoPin_R_R2);
              servo_R_L1.attach(servoPin_R_L1);
              servo_R_L2.attach(servoPin_R_L2);
            
              servo_B_L.write(10);
              servo_B_R.write(0);
              servo_R_R1.write(90);
              servo_R_R2.write(90);
              servo_R_L1.write(90);
              servo_R_L2.write(90);
            }
            
            
            void loop() {
              // Check the bridge state and perform the corresponding actions
              if (bridgeState == BRIDGE_CLOSED) {
                delay(100);
                digitalWrite(ledPin_R_R_G, HIGH);
                digitalWrite(ledPin_R_L_G, HIGH);
                digitalWrite(ledPin_B_R_R, HIGH);
                digitalWrite(ledPin_B_L_R, HIGH);
                digitalWrite(ledPin_R_R_R, LOW);
                digitalWrite(ledPin_R_L_R, LOW);
                digitalWrite(ledPin_B_R_G, LOW);
                digitalWrite(ledPin_B_L_G, LOW);
            
                
                digitalWrite(trigPin_B_L, LOW);
                delayMicroseconds(2);
                digitalWrite(trigPin_B_L, HIGH);
                delayMicroseconds(10);
                digitalWrite(trigPin_B_L, LOW);
            
                digitalWrite(trigPin_B_R, LOW);
                delayMicroseconds(2);
                digitalWrite(trigPin_B_R, HIGH);
                delayMicroseconds(10);
                digitalWrite(trigPin_B_R, LOW);
            
                unsigned long duration_B_L = pulseIn(echoPin_B_L, HIGH);
                unsigned int distance_B_L = duration_B_L / 58;
            
                unsigned long duration_B_R = pulseIn(echoPin_B_R, HIGH);
                unsigned int distance_B_R = duration_B_R / 58;
            
                if (((distance_B_L < 20) && (distance_B_L > 0)) || ((distance_B_R < 20) && (distance_B_R > 0))) {
                  boatApproaching();
                } else {
                  servo_B_L.write(10);
                  delay(15);
                  servo_B_R.write(0);
                }
            
                Serial.print("Distance_B_L: ");
                Serial.print(distance_B_L);
                Serial.println(" cm");
            
                Serial.print("Distance_B_R: ");
                Serial.print(distance_B_R);
                Serial.println(" cm");
            
                delay(500);
              } else if (bridgeState == BRIDGE_OPEN) {
                // Close the bridge after some delay
                delay(5000);
                closeBridge();
              }
            }
            void boatApproaching() {
              // Check if road traffic is clear
              // led add
              digitalWrite(ledPin_R_R_G, LOW);
              digitalWrite(ledPin_R_L_G, LOW);
              digitalWrite(ledPin_B_R_R, HIGH);
              digitalWrite(ledPin_B_L_R, HIGH);
              digitalWrite(ledPin_R_R_R, HIGH);
              digitalWrite(ledPin_R_L_R, HIGH);
              digitalWrite(ledPin_B_R_G, LOW);
              digitalWrite(ledPin_B_L_G, LOW);
            
              delay(20);
              
              servo_R_R1.write(5);
              servo_R_L2.write(170);
              delay(100);
              if (roadTrafficClear()) {
                servo_R_R2.write(0);
                delay(20);
              
                delay(20);
              
                servo_R_L1.write(0);
                delay(20);
            
                openBridge();  // Close the road gates
            
                delay(20);
            
                digitalWrite(ledPin_R_R_G, LOW);
                digitalWrite(ledPin_R_L_G, LOW);
                digitalWrite(ledPin_B_R_R, LOW);
                digitalWrite(ledPin_B_L_R, LOW);
                digitalWrite(ledPin_R_R_R, HIGH);
                digitalWrite(ledPin_R_L_R, HIGH);
                digitalWrite(ledPin_B_R_G, HIGH);
                digitalWrite(ledPin_B_L_G, HIGH);
                
                bridgeState = BRIDGE_OPEN;
              } else {
                // Road traffic is not clear, delay and check again
                delay(500);  // Delay for 5 seconds (adjust as needed)
                boatApproaching();  // Recursive call to check again
              }
            }
            
            void openBridge() {
              for (int i = 10; i < 90; i++) {
                servo_B_L.write(i);
                delay(20);
              }
              delay(15);
            
              for (int i = 0; i < 80; i++) {
                servo_B_R.write(i);
                delay(20);
              }
              delay(1500);
            }
            
            bool roadTrafficClear() {
              // Read distance from the two ultrasonic sensors
              unsigned long duration_Road_L = getUltrasonicDistance(trigPin_R_L, echoPin_R_L);
              unsigned long duration_Road_R = getUltrasonicDistance(trigPin_R_R, echoPin_R_R);
            
              // Define a threshold distance to determine if the road is clear
              unsigned int thresholdDistance = 30; // Adjust this value as needed
            
              Serial.print("duration_Road_L: ");
                Serial.print(duration_Road_L / 58);
                Serial.println(" cm");
            
                Serial.print("duration_Road_R: ");
                Serial.print(duration_Road_R / 58);
                Serial.println(" cm");
              // Check if both distances are above the threshold, indicating road is clear
              if (duration_Road_L / 58 > thresholdDistance && duration_Road_R / 58 > thresholdDistance) {
                return true; // Road traffic is clear
              } else {
                return false; // Road traffic is not clear
              }
            }
            
            unsigned long getUltrasonicDistance(int trigPin, int echoPin) {
              digitalWrite(trigPin, LOW);
              delayMicroseconds(2);
              digitalWrite(trigPin, HIGH);
              delayMicroseconds(10);
              digitalWrite(trigPin, LOW);
            
              return pulseIn(echoPin, HIGH);
            }
            
            void closeBridge() {
              digitalWrite(ledPin_R_R_G, LOW);
              digitalWrite(ledPin_R_L_G, LOW);
              digitalWrite(ledPin_B_R_R, HIGH);
              digitalWrite(ledPin_B_L_R, HIGH);
              digitalWrite(ledPin_R_R_R, HIGH);
              digitalWrite(ledPin_R_L_R, HIGH);
              digitalWrite(ledPin_B_R_G, LOW);
              digitalWrite(ledPin_B_L_G, LOW);
              
              servo_B_L.write(10);
              delay(15);
              servo_B_R.write(0);
              delay(3500);
              // Reset servo angles and bridge state to initial values
            
                digitalWrite(ledPin_R_R_G, HIGH);
                digitalWrite(ledPin_R_L_G, HIGH);
                digitalWrite(ledPin_B_R_R, HIGH);
                digitalWrite(ledPin_B_L_R, HIGH);
                digitalWrite(ledPin_R_R_R, LOW);
                digitalWrite(ledPin_R_L_R, LOW);
                digitalWrite(ledPin_B_R_G, LOW);
                digitalWrite(ledPin_B_L_G, LOW);
              servo_R_R1.write(90);
              servo_R_R2.write(90);
              servo_R_L1.write(90);
              servo_R_L2.write(90);
              bridgeState = BRIDGE_CLOSED;
            }
            `}
          </code>
        </pre>
      </div>

      <br />
      <br />
    </div>
  );
}

export default Product1;
