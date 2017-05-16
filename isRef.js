Shuttler.isRef = function (ref) {
	const validationContext = Shuttler.Ref.Schema.newContext()
	validationContext.validate(ref, {keys: ['id', 'collection']})
	return validationContext.isValid()
};