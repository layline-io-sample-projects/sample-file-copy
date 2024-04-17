function onMessage(message) {
    stream.logInfo(message.toJson());
    stream.emit(message, processor.getOutputPort("Output-1"))
}