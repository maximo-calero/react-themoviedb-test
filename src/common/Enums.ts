export enum RequestState {
    DeparmentSelection,
    RequesProcess,
    SendRequest
}

export enum StepComponentType {
    SelectionPanel = 0,
    MultiSelectionPanel = 1,
    DateInput = 2,
    TextInput = 3,
    NumberInput = 4,
    MultilineTextInput = 5,
    SendRequest = 6
}

export enum StepContainerType {
    SelectionContainer = 0,
    InputsFormContainer = 1,
    DateFormContainer = 2,
    MultiSelectionFormContainer = 3,
    MultilineFormContainer = 4,
    SendRequestContainer = 5,
    NumberInputsFormContainer = 6,
}
 
export enum QuestionFieldType {
    SendRequest = -1,
    Integer = 1,
    Text = 2,
    Note = 3,
    DateTime = 4,
    Choice = 6,
    Lookup = 7,
    Boolean = 8,
    Number = 9,
    Currency = 10,
    URL = 11,
    MultiChoice = 15,
    Calculated = 17,
    File = 18,
    Attachment = 19,
    User = 20,
    ContentTypeId = 25,
    WorkflowStatus = 28
}