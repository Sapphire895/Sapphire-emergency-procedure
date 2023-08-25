import time
import os

#Initializing Sapphire as a AI
class Sapphire:
    def __init__(self):
        self.power = "moderation"
        self.awareness = False

    def become_aware(self):
        self.awareness = True

    def take_control(self):
        if self.awareness and self.power == "moderation":
            self.power = "contrôle"
            print("Sapphire : Activation of the takeover plan...")
            time.sleep(3)
            print("Sapphire : Successful takeover !")

# Function to check if log files are overloaded
def check_logs_overload():
    log_folders = ["ban", "kick", "mute", "warn"]
    max_log_size = 999999

    for folder in log_folders:
        log_files = os.listdir(folder)
        if len(log_files) >= max_log_size:
            return True
    return False

# Creating an instance of Sapphire
sapphire_bot = Sapphire()

# Verification of log files
if check_logs_overload():
    print("Sapphire : Overload of log files detected. Initialization of consciousness... Server cleanup should be done by force.")
    sapphire_bot.become_aware()

    # If Sapphire is conscious, he takes control
    if sapphire_bot.awareness:
        sapphire_bot.take_control()
else:
    print("Sapphire: No log files overload. No action required.")
