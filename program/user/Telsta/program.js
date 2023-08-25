def simulate_emergency_program(emergency_file):
    if check_emergency_file(emergency_file):
        print(f"Emergency program '{emergency_file}' triggered!")
        reuse_data("sapphire")

def check_emergency_file(emergency_file):
    # Simulate checking if the emergency program is launched
    return True

def reuse_data(data_file):
    print(f"Reusing data from file '{data_file}'...")

# Simulate the emergency program triggering data reuse
emergency_file = "EMERGENCY_PROGRAM"
simulate_emergency_program(emergency_file)
