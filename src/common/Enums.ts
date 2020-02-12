export enum BackdropSizes {
    w300 =0,
    w780 =1,
    w1280 =2,
    original =3    
}

export enum PosterSizes {
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
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