import csv
import random
height = []
weight = []
age = []
gender = []
active = []
parents = []

outcome_cardio = []

#Open for reading
with open('cardio_train.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        height.append(row[0])
        weight.append(row[1])
        age.append(row[2])
        gender.append(row[3])
        active.append(row[4])

        if row[5] == 1:
            randomConfidence = random.uniform(0, 1)
            if randomConfidence > 0.2:
                parents.append(1)
            else:
                parents.append(0)
        else:
            parents.append(0)

        outcome_cardio.append(row[5])
        
# Writing to file 
with open("cardio_train2.csv", "w") as file1:
    employee_writer = csv.writer(file1, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for row in range(len(height)):
        employee_writer.writerow([ height[row], weight[row], age[row], gender[row], active[row], parents[row], outcome_cardio[row] ])

        
        