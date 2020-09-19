import numpy
from tensorflow import keras

'''
Args:
	X -> a list contating {BMI[int], parent[(int)0 or 1],Age[int]}
'''
def prediction(X):
	# load the dataset
	#dataset = numpy.loadtxt('test.csv', delimiter=',')
	# split into input (X) and output (y) variables
	#X = dataset[:,0:3]
	#y = dataset[:,3]

	model = keras.models.load_model('model/')

	# make probability predictions with the model
	predictions = model.predict_classes(X)


	#for i in range(70):
	#	print('%s => %d (expected %d)' % (X[i].tolist(), predictions[i], y[i]))

