from numpy import loadtxt
from tensorflow import keras

# load the dataset
dataset = loadtxt('diabetes.csv', delimiter=',')
# split into input (X) and output (y) variables
X = dataset[:,0:3]
y = dataset[:,3]

model = keras.models.load_model('model/')

# make probability predictions with the model
predictions = model.predict_classes(X)
for i in range(20):
	print('%s => %d (expected %d)' % (X[i].tolist(), predictions[i], y[i]))
