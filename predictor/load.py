import numpy
from tensorflow import keras

'''
Args:
	X -> a list contating {BMI[int], parent[(int)0 or 1],Age[int]}
Return:
	predictions
'''


def prediction_dibeties(X):
	# load the dataset
	# dataset = numpy.loadtxt('test.csv', delimiter=',')
	# split into input (X) and output (y) variables
	# X = dataset[:,0:3]
	# y = dataset[:,3]

	model = keras.models.load_model('model/diabeties/')

	# make probability predictions with the model
	predictions = model.predict_classes(X)

	return predictions, 70


# for i in range(70):
#	print('%s => %d (expected %d)' % (X[i].tolist(), predictions[i], y[i]))

'''
Args:
	X -> a list contating {height[int], weight[int], age[int], gender[int 1/2], active[int 0/1], parents[int 0/1], outcome_cardio[int 0/1] }

Return:
	predictions
'''


def prediction_cardio(X):
	model = keras.models.load_model('model/cardio/')

	# make probability predictions with the model
	predictions = model.predict_classes(X)

	return predictions, 50

if __name__ == '__main__':
	print(prediction_dibeties([[33.6, 0, 50]]))
	print(prediction_cardio([[167, 67, 18068, 1, 0, 0]]))