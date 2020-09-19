import csv
import random
BMI = []
parents = []
age = []
outcome = []

#Open for reading
with open('diabetes.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        BMI.append(row[0])
        parents.append(random.randint(0, 1))
        age.append(row[2])
        outcome.append(row[3])
        
# Writing to file 
with open("diabetes2.csv", "w") as file1:
    employee_writer = csv.writer(file1, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for row in range(len(BMI)):
        employee_writer.writerow([ BMI[row], parents[row], age[row], outcome[row] ])

        
        