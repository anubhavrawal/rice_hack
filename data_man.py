import csv
import random
c1 = []
c2 = []
c3 = []
c4 = []

#Open for reading
with open('diabetes.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader:
        c1.append(row[0])
        c2.append(random.randint(0, 1))
        c3.append(row[2])
        c4.append(row[3])
        
# Writing to file 
with open("diabetes2.csv", "w") as file1:
    employee_writer = csv.writer(file1, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    for row in range(len(c1)):
        employee_writer.writerow([ c1[row], c2[row], c3[row], c4[row] ])

        
        