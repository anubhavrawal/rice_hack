from numpy import loadtxt
from keras.models import Sequential
from keras.layers import Dense

# loading the dataset
dataset = loadtxt('diabetes2.csv', delimiter=',')
# spliting into input (X) and output (y) variables
X = dataset[:,0:3]
y = dataset[:,3]

#Constructiong a model
model = Sequential()
model.add( Dense(12, input_dim=3, activation='relu') )
model.add(Dense(3, activation='relu') )
model.add(Dense(1,activation = 'sigmoid'))

#compileing the keras model
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# fiting the keras model on the dataset
model.fit(X, y, epochs=150, batch_size=10)
model.save("model/")

#evaluate the keras model for accurace
_, accuracy = model.evaluate(X, y)
print('Accuracy: %.2f' % (accuracy*100))

# make class predictions with the model
predictions = model.predict_classes(X)
# summarize the first 5 cases
for i in range(15):
	print('%s => %d (expected %d)' % (X[i].tolist(), predictions[i], y[i]))



