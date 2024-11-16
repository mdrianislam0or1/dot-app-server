// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Void: { input: void; output: void; }
};

export type AgeDifferenceWith = {
  __typename?: 'AgeDifferenceWith';
  dateOfBirth?: Maybe<Scalars['Int']['output']>;
  documentPortrait?: Maybe<Scalars['Int']['output']>;
};

export type BiometricMultiValueAttribute = {
  __typename?: 'BiometricMultiValueAttribute';
  documentPortrait?: Maybe<Scalars['String']['output']>;
  mrz?: Maybe<Scalars['String']['output']>;
  selfie?: Maybe<Scalars['String']['output']>;
  visualZone?: Maybe<Scalars['String']['output']>;
};

export type CheckDigitsValidity = CheckDigitsValidityTd1Td2 | CheckDigitsValidityTd3;

export type CheckDigitsValidityTd1Td2 = {
  __typename?: 'CheckDigitsValidityTd1Td2';
  compositeCheckDigitValid: Scalars['Boolean']['output'];
  dateOfBirthCheckDigitValid: Scalars['Boolean']['output'];
  dateOfExpiryCheckDigitValid: Scalars['Boolean']['output'];
  documentNumberCheckDigitValid: Scalars['Boolean']['output'];
};

export type CheckDigitsValidityTd3 = {
  __typename?: 'CheckDigitsValidityTd3';
  compositeCheckDigitValid: Scalars['Boolean']['output'];
  dateOfBirthCheckDigitValid: Scalars['Boolean']['output'];
  dateOfExpiryCheckDigitValid: Scalars['Boolean']['output'];
  documentNumberCheckDigitValid: Scalars['Boolean']['output'];
  personalNumberCheckDigitValid: Scalars['Boolean']['output'];
};

export type ContactFormRequest = {
  checked: Scalars['Boolean']['input'];
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum CreateCustomerLivenessSelfieWarning {
  MULTIPLE_FACES_DETECTED = 'MULTIPLE_FACES_DETECTED'
}

export type CreateCustomerResponse = {
  __typename?: 'CreateCustomerResponse';
  links: SelfLinks;
};

export type CreateDocumentPageResponse = {
  __typename?: 'CreateDocumentPageResponse';
  detection?: Maybe<DocumentDetection>;
  documentType?: Maybe<DocumentType>;
  errorCode?: Maybe<CreateDocumentPageResponseErrorCode>;
  links: CustomerLinks;
  pageType?: Maybe<Scalars['String']['output']>;
  warnings?: Maybe<Array<CreateDocumentPageResponseWarning>>;
};

export enum CreateDocumentPageResponseErrorCode {
  NO_CARD_CORNERS_DETECTED = 'NO_CARD_CORNERS_DETECTED',
  PAGE_DOESNT_MATCH_DOCUMENT_TYPE_OF_PREVIOUS_PAGE = 'PAGE_DOESNT_MATCH_DOCUMENT_TYPE_OF_PREVIOUS_PAGE'
}

export enum CreateDocumentPageResponseWarning {
  DOCUMENT_TYPE_NOT_RECOGNIZED = 'DOCUMENT_TYPE_NOT_RECOGNIZED',
  MISSING_BACK_PAGE = 'MISSING_BACK_PAGE'
}

export type CreateDocumentResponse = {
  __typename?: 'CreateDocumentResponse';
  links: SelfLinks;
};

export enum CreateLivenessRecordsErrorCode {
  INVALID_DATA = 'INVALID_DATA'
}

export type CreateLivenessRecordsResponse = {
  __typename?: 'CreateLivenessRecordsResponse';
  customerLinks: CustomerLinks;
  errorCode?: Maybe<CreateLivenessRecordsErrorCode>;
  links: LivenessRecordsSelfieLink;
  selfie?: Maybe<LivenessRecordsDetection>;
};

export type CroppedImageLinks = {
  fingerprint?: InputMaybe<ImageLink>;
  ghostPortrait?: InputMaybe<ImageLink>;
  portrait?: InputMaybe<ImageLink>;
  signature?: InputMaybe<ImageLink>;
};

export type CroppedImagesResponse = {
  __typename?: 'CroppedImagesResponse';
  fingerprint?: Maybe<Scalars['String']['output']>;
  ghostPortrait?: Maybe<Scalars['String']['output']>;
  portrait?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
};

export type CroppedSelfieResponse = {
  __typename?: 'CroppedSelfieResponse';
  selfie?: Maybe<Scalars['String']['output']>;
};

export type Customer = {
  __typename?: 'Customer';
  age?: Maybe<BiometricMultiValueAttribute>;
  citizenship?: Maybe<MultiValueAttribute>;
  dateOfBirth?: Maybe<MultiValueAttribute>;
  document?: Maybe<CustomerDocument>;
  fullName?: Maybe<MultiValueAttribute>;
  gender?: Maybe<BiometricMultiValueAttribute>;
  givenNames?: Maybe<MultiValueAttribute>;
  nationality?: Maybe<MultiValueAttribute>;
  personalNumber?: Maybe<MultiValueAttribute>;
  surname?: Maybe<MultiValueAttribute>;
};

export type CustomerDocument = {
  __typename?: 'CustomerDocument';
  additionalTexts?: Maybe<Array<MultivalueAttributeWithoutMrz>>;
  dateOfExpiry?: Maybe<MultiValueAttribute>;
  dateOfIssue?: Maybe<MultiValueAttribute>;
  documentNumber?: Maybe<MultiValueAttribute>;
  issuingAuthority?: Maybe<MultiValueAttribute>;
  links?: Maybe<CustomerDocumentLinks>;
  mrz?: Maybe<Mrz>;
  pageTypes: Array<Scalars['String']['output']>;
  parsedType: ParsedDocumentType;
  type: DocumentType;
};

export type CustomerDocumentLinks = {
  __typename?: 'CustomerDocumentLinks';
  fingerprint?: Maybe<Scalars['String']['output']>;
  ghostPortrait?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<CustomerDocumentPages>;
  portrait?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
};

export type CustomerDocumentPages = {
  __typename?: 'CustomerDocumentPages';
  back?: Maybe<Scalars['String']['output']>;
  front?: Maybe<Scalars['String']['output']>;
  unknown?: Maybe<Scalars['String']['output']>;
};

export type CustomerLinks = {
  __typename?: 'CustomerLinks';
  customer: Scalars['String']['output'];
};

export type CustomerLiveness = {
  __typename?: 'CustomerLiveness';
  errorCode?: Maybe<EvaluateLivenessErrorCode>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type CustomerSelfieInspection = {
  __typename?: 'CustomerSelfieInspection';
  ageDifferenceWith?: Maybe<AgeDifferenceWith>;
  ageEstimate?: Maybe<Scalars['Int']['output']>;
  genderConsistency?: Maybe<GenderConsistency>;
  genderEstimate?: Maybe<Scalars['String']['output']>;
  hasMask?: Maybe<Scalars['Boolean']['output']>;
  similarityWith?: Maybe<SimilarityWith>;
};

export type DetectFaceResponse = {
  __typename?: 'DetectFaceResponse';
  detection?: Maybe<FaceDetection>;
  errorCode?: Maybe<DetectFaceResponseErrorCode>;
  links?: Maybe<SelfLinks>;
  warnings?: Maybe<Array<DetectFaceResponseWarnings>>;
};

export enum DetectFaceResponseErrorCode {
  MULTIPLE_FACES_DETECTED = 'MULTIPLE_FACES_DETECTED',
  NO_FACE_DETECTED = 'NO_FACE_DETECTED'
}

export enum DetectFaceResponseWarnings {
  MULTIPLE_FACES_DETECTED = 'MULTIPLE_FACES_DETECTED'
}

export enum DetectSelfieErrorCode {
  NO_FACE_DETECTED = 'NO_FACE_DETECTED'
}

export type DetectSelfieResponse = {
  __typename?: 'DetectSelfieResponse';
  detection?: Maybe<FaceDetection>;
  errorCode?: Maybe<DetectSelfieErrorCode>;
  links: Links;
  warnings?: Maybe<Array<DetectSelfieWarnings>>;
};

export enum DetectSelfieWarnings {
  MULTIPLE_FACES_DETECTED = 'MULTIPLE_FACES_DETECTED'
}

export type DocumentAdvice = {
  classification?: InputMaybe<DocumentClassificationAdvice>;
};

export type DocumentAgeDifferenceWith = {
  __typename?: 'DocumentAgeDifferenceWith';
  dateOfBirth: Scalars['Int']['output'];
};

export type DocumentClassificationAdvice = {
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  editions?: InputMaybe<Array<Scalars['String']['input']>>;
  machineReadableTravelDocuments?: InputMaybe<Array<Scalars['String']['input']>>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DocumentCoordinates = {
  __typename?: 'DocumentCoordinates';
  bottomLeftCorner: Point;
  bottomRightCorner: Point;
  topLeftCorner: Point;
  topRightCorner: Point;
};

export type DocumentDetection = {
  __typename?: 'DocumentDetection';
  confidence: Scalars['Float']['output'];
  coordinates: DocumentCoordinates;
};

export type DocumentGenderConsistency = {
  __typename?: 'DocumentGenderConsistency';
  mrz?: Maybe<Scalars['Boolean']['output']>;
  viz?: Maybe<Scalars['Boolean']['output']>;
};

export type DocumentPageAdvice = {
  classification?: InputMaybe<DocumentPageClassificationAdvice>;
};

export type DocumentPageClassificationAdvice = {
  pageTypes?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentPageRequest = {
  advice: DocumentPageAdvice;
  image: Image;
};

export type DocumentType = {
  __typename?: 'DocumentType';
  country?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  machineReadableTravelDocument?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EvaluateCustomerLivenessResponse = {
  __typename?: 'EvaluateCustomerLivenessResponse';
  links: CustomerLinks;
  liveness?: Maybe<CustomerLiveness>;
};

export enum EvaluateLivenessErrorCode {
  INVALID_DATA = 'INVALID_DATA',
  NOT_ENOUGH_DATA = 'NOT_ENOUGH_DATA'
}

export enum EvaluateLivenessType {
  EYE_GAZE_LIVENESS = 'EYE_GAZE_LIVENESS',
  MAGNIFEYE_LIVENESS = 'MAGNIFEYE_LIVENESS',
  PASSIVE_LIVENESS = 'PASSIVE_LIVENESS',
  SMILE_LIVENESS = 'SMILE_LIVENESS'
}

export type FaceAttribute = {
  __typename?: 'FaceAttribute';
  preconditionsMet: Scalars['Boolean']['output'];
  score: Scalars['Float']['output'];
};

export type FaceDetection = {
  __typename?: 'FaceDetection';
  confidence?: Maybe<Scalars['Float']['output']>;
  faceRectangle?: Maybe<Roi>;
};

export type FaceDetectionProperties = {
  faceSizeRatio?: InputMaybe<FaceSizeRatio>;
  mode?: InputMaybe<FaceDetectionPropertiesMode>;
};

export enum FaceDetectionPropertiesMode {
  FREE = 'FREE',
  STRICT = 'STRICT'
}

export type FaceQualityResponse = {
  __typename?: 'FaceQualityResponse';
  backgroundUniformity?: Maybe<FaceAttribute>;
  brightness?: Maybe<FaceAttribute>;
  contrast?: Maybe<FaceAttribute>;
  eyeDistance?: Maybe<FaceAttribute>;
  eyeGaze?: Maybe<FaceAttribute>;
  faceRelativeArea?: Maybe<FaceAttribute>;
  faceRelativeAreaInImage?: Maybe<FaceAttribute>;
  faceSize?: Maybe<FaceAttribute>;
  heavyFrame?: Maybe<FaceAttribute>;
  leftEye?: Maybe<FaceAttribute>;
  links: SelfLinks;
  mouth?: Maybe<FaceAttribute>;
  noseShadow?: Maybe<FaceAttribute>;
  pitch?: Maybe<HeadPoseAttribute>;
  redLeftEye?: Maybe<FaceAttribute>;
  redRightEye?: Maybe<FaceAttribute>;
  rightEye?: Maybe<FaceAttribute>;
  roll?: Maybe<HeadPoseAttribute>;
  shadow?: Maybe<FaceAttribute>;
  sharpness?: Maybe<FaceAttribute>;
  specularity?: Maybe<FaceAttribute>;
  uniqueIntensityLevels?: Maybe<FaceAttribute>;
  yaw?: Maybe<HeadPoseAttribute>;
};

export type FaceSizeRatio = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenderConsistency = {
  __typename?: 'GenderConsistency';
  documentPortrait?: Maybe<Scalars['Boolean']['output']>;
  mrz?: Maybe<Scalars['Boolean']['output']>;
  viz?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAppInfoResponse = {
  __typename?: 'GetAppInfoResponse';
  disVersion?: Maybe<Scalars['String']['output']>;
  iFaceVersion?: Maybe<Scalars['String']['output']>;
  samVersion?: Maybe<Scalars['String']['output']>;
};

export type GetCustomerResponse = {
  __typename?: 'GetCustomerResponse';
  customer?: Maybe<Customer>;
  links: CustomerLinks;
};

export type GetMetadataResponse = {
  __typename?: 'GetMetadataResponse';
  documents: Array<MetadataDocument>;
};

export type HeadPoseAttribute = {
  __typename?: 'HeadPoseAttribute';
  angle: Scalars['Float']['output'];
  preconditionsMet: Scalars['Boolean']['output'];
};

export type Image = {
  data?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ImageDimensions = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageLink = {
  dimensions?: InputMaybe<ImageDimensions>;
  link: Scalars['String']['input'];
};

export type InspectCustomerLinks = {
  __typename?: 'InspectCustomerLinks';
  customer: Scalars['String']['output'];
  documentInspection: Scalars['String']['output'];
};

export type InspectCustomerResponse = {
  __typename?: 'InspectCustomerResponse';
  links: InspectCustomerLinks;
  security?: Maybe<SecurityInspection>;
  selfieInspection?: Maybe<CustomerSelfieInspection>;
};

export type InspectDocumentPortrait = {
  __typename?: 'InspectDocumentPortrait';
  ageDifferenceWith?: Maybe<DocumentAgeDifferenceWith>;
  ageEstimate?: Maybe<Scalars['Int']['output']>;
  genderConsistency?: Maybe<DocumentGenderConsistency>;
  genderEstimate?: Maybe<Scalars['String']['output']>;
};

export type InspectDocumentResponse = {
  __typename?: 'InspectDocumentResponse';
  expired?: Maybe<Scalars['Boolean']['output']>;
  links: CustomerLinks;
  mrzInspection?: Maybe<MrzInspection>;
  pageTampering?: Maybe<Array<PageTamperingInspection>>;
  portraitInspection?: Maybe<InspectDocumentPortrait>;
  visualZoneInspection?: Maybe<InspectDocumentVisualZone>;
};

export type InspectDocumentVisualZone = {
  __typename?: 'InspectDocumentVisualZone';
  ocrConfidence?: Maybe<OcrConfidence>;
  textConsistency?: Maybe<VisualZoneConsistency>;
};

export type Links = {
  __typename?: 'Links';
  customer: Scalars['String']['output'];
  self: Scalars['String']['output'];
};

export type LivenessRecordsDetection = {
  __typename?: 'LivenessRecordsDetection';
  detection?: Maybe<FaceDetection>;
};

export type LivenessRecordsSelfieLink = {
  __typename?: 'LivenessRecordsSelfieLink';
  selfie?: Maybe<Scalars['String']['output']>;
};

export type MetadataDocument = {
  __typename?: 'MetadataDocument';
  documentType?: Maybe<MetadataDocumentType>;
  pages: Array<MetadataDocumentPage>;
};

export type MetadataDocumentPage = {
  __typename?: 'MetadataDocumentPage';
  name: Scalars['String']['output'];
  visualZone: Array<MetadataTextField>;
};

export type MetadataDocumentType = {
  __typename?: 'MetadataDocumentType';
  country?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  machineReadableTravelDocument?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type MetadataTextField = {
  __typename?: 'MetadataTextField';
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  valueNormalized?: Maybe<Scalars['Boolean']['output']>;
};

export type Mrz = {
  __typename?: 'Mrz';
  td1?: Maybe<Td1Mrz>;
  td2?: Maybe<Td2Mrz>;
  td3?: Maybe<Td3Mrz>;
};

export type MrzAttributes = {
  checkDigitsValidity: CheckDigitsValidity;
  dateOfBirth: Scalars['String']['output'];
  dateOfExpiry: Scalars['String']['output'];
  documentCode: Scalars['String']['output'];
  documentNumber: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  givenNames: Scalars['String']['output'];
  issuingAuthority: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  surname: Scalars['String']['output'];
};

export type MrzInspection = {
  __typename?: 'MrzInspection';
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export type MultiValueAttribute = {
  __typename?: 'MultiValueAttribute';
  barcode?: Maybe<Scalars['String']['output']>;
  mrz?: Maybe<Scalars['String']['output']>;
  visualZone?: Maybe<Scalars['String']['output']>;
};

export type MultivalueAttributeWithoutMrz = {
  __typename?: 'MultivalueAttributeWithoutMrz';
  barcode?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  visualZone?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDocumentPageWithContent?: Maybe<CreateDocumentPageResponse>;
  createDocumentPageWithImage?: Maybe<CreateDocumentPageResponse>;
  createFace?: Maybe<DetectFaceResponse>;
  createLivenessRecords?: Maybe<CreateLivenessRecordsResponse>;
  createSelfie?: Maybe<DetectSelfieResponse>;
  deleteCustomer?: Maybe<Scalars['Void']['output']>;
  postContactForm?: Maybe<Scalars['Void']['output']>;
};


export type MutationCreateDocumentPageWithContentArgs = {
  content: Scalars['String']['input'];
  customerApiLink?: InputMaybe<Scalars['String']['input']>;
  documentAdvice?: InputMaybe<DocumentAdvice>;
  isDocumentCreated: Scalars['Boolean']['input'];
  sources?: InputMaybe<Array<Source>>;
};


export type MutationCreateDocumentPageWithImageArgs = {
  customerApiLink?: InputMaybe<Scalars['String']['input']>;
  documentAdvice?: InputMaybe<DocumentAdvice>;
  image: Scalars['String']['input'];
  isDocumentCreated: Scalars['Boolean']['input'];
  pageType?: InputMaybe<Scalars['String']['input']>;
  sources?: InputMaybe<Array<Source>>;
};


export type MutationCreateFaceArgs = {
  detection?: InputMaybe<FaceDetectionProperties>;
  image: Scalars['String']['input'];
};


export type MutationCreateLivenessRecordsArgs = {
  content: Scalars['String']['input'];
  customerApiLink?: InputMaybe<Scalars['String']['input']>;
  isLivenessCreated?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSelfieArgs = {
  customerApiLink?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  selfieLink?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCustomerArgs = {
  customerApiLink: Scalars['String']['input'];
};


export type MutationPostContactFormArgs = {
  contactFormData: ContactFormRequest;
  recaptchaToken: Scalars['String']['input'];
};

export type OcrConfidence = {
  __typename?: 'OcrConfidence';
  confidence: Scalars['Float']['output'];
  lowOcrConfidenceTexts?: Maybe<Array<Scalars['String']['output']>>;
};

export type PageTamperingInspection = {
  __typename?: 'PageTamperingInspection';
  colorProfileChangeDetected?: Maybe<Scalars['Boolean']['output']>;
  looksLikeScreenshot?: Maybe<Scalars['Boolean']['output']>;
};

export type Pages = {
  back?: InputMaybe<Scalars['String']['input']>;
  front?: InputMaybe<Scalars['String']['input']>;
  unknown?: InputMaybe<Scalars['String']['input']>;
};

export type ParsedDocumentType = {
  __typename?: 'ParsedDocumentType';
  country?: Maybe<Scalars['String']['output']>;
  edition?: Maybe<Scalars['String']['output']>;
  isDocumentSupported?: Maybe<Scalars['Boolean']['output']>;
  machineReadableTravelDocument?: Maybe<TravelDocumentType>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Point = {
  __typename?: 'Point';
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  appInfo?: Maybe<GetAppInfoResponse>;
  croppedImages?: Maybe<CroppedImagesResponse>;
  croppedSelfie?: Maybe<CroppedSelfieResponse>;
  customer?: Maybe<GetCustomerResponse>;
  evaluateCustomerLiveness?: Maybe<EvaluateCustomerLivenessResponse>;
  faceQuality?: Maybe<FaceQualityResponse>;
  inspectCustomer?: Maybe<InspectCustomerResponse>;
  inspectDocument?: Maybe<InspectDocumentResponse>;
  metadata?: Maybe<GetMetadataResponse>;
  normalizedDocumentImages?: Maybe<CustomerDocumentPages>;
  storeCustomer?: Maybe<StoreCustomerResponse>;
};


export type QueryCroppedImagesArgs = {
  imageLinks: CroppedImageLinks;
};


export type QueryCroppedSelfieArgs = {
  dimensions?: InputMaybe<ImageDimensions>;
  faceApiLink: Scalars['String']['input'];
};


export type QueryCustomerArgs = {
  customerApiLink: Scalars['String']['input'];
};


export type QueryEvaluateCustomerLivenessArgs = {
  customerApiLink: Scalars['String']['input'];
  type: EvaluateLivenessType;
};


export type QueryFaceQualityArgs = {
  faceApiLink: Scalars['String']['input'];
};


export type QueryInspectCustomerArgs = {
  customerApiLink: Scalars['String']['input'];
};


export type QueryInspectDocumentArgs = {
  customerApiLink: Scalars['String']['input'];
};


export type QueryNormalizedDocumentImagesArgs = {
  dimensions?: InputMaybe<ImageDimensions>;
  pages: Pages;
};


export type QueryStoreCustomerArgs = {
  customerApiLink: Scalars['String']['input'];
  onboardingStatus: StoreCustomerOnboardingStatus;
};

export type Roi = {
  __typename?: 'Roi';
  bottomLeft?: Maybe<Point>;
  bottomRight?: Maybe<Point>;
  topLeft?: Maybe<Point>;
  topRight?: Maybe<Point>;
};

export type SecurityInspection = {
  __typename?: 'SecurityInspection';
  videoInjection?: Maybe<VideoInjection>;
};

export type SelfLinks = {
  __typename?: 'SelfLinks';
  self: Scalars['String']['output'];
};

export type SimilarityWith = {
  __typename?: 'SimilarityWith';
  documentPortrait?: Maybe<Scalars['Boolean']['output']>;
  livenessSelfies?: Maybe<Scalars['Boolean']['output']>;
};

export enum Source {
  BARCODE = 'BARCODE',
  DOCUMENT_PORTRAIT = 'DOCUMENT_PORTRAIT',
  MRZ = 'MRZ',
  VIZ = 'VIZ'
}

export type StoreCustomerApiError = {
  __typename?: 'StoreCustomerApiError';
  error?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export enum StoreCustomerOnboardingStatus {
  FINISHED = 'FINISHED',
  IN_PROGRESS = 'IN_PROGRESS'
}

export type StoreCustomerResponse = {
  __typename?: 'StoreCustomerResponse';
  apiError?: Maybe<StoreCustomerApiError>;
};

export type Td1Mrz = MrzAttributes & {
  __typename?: 'Td1Mrz';
  checkDigitsValidity: CheckDigitsValidityTd1Td2;
  dateOfBirth: Scalars['String']['output'];
  dateOfExpiry: Scalars['String']['output'];
  documentCode: Scalars['String']['output'];
  documentNumber: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  givenNames: Scalars['String']['output'];
  issuingAuthority: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  optionalDataFirstLine?: Maybe<Scalars['String']['output']>;
  optionalDataSecondLine?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
};

export type Td2Mrz = MrzAttributes & {
  __typename?: 'Td2Mrz';
  checkDigitsValidity: CheckDigitsValidityTd1Td2;
  dateOfBirth: Scalars['String']['output'];
  dateOfExpiry: Scalars['String']['output'];
  documentCode: Scalars['String']['output'];
  documentNumber: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  givenNames: Scalars['String']['output'];
  issuingAuthority: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  optionalDataSecondLine?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
};

export type Td3Mrz = MrzAttributes & {
  __typename?: 'Td3Mrz';
  checkDigitsValidity: CheckDigitsValidityTd3;
  dateOfBirth: Scalars['String']['output'];
  dateOfExpiry: Scalars['String']['output'];
  documentCode: Scalars['String']['output'];
  documentNumber: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  givenNames: Scalars['String']['output'];
  issuingAuthority: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  personalNumberOrOptionalDataSecondLine?: Maybe<Scalars['String']['output']>;
  surname: Scalars['String']['output'];
};

export type TextConsistencyWith = {
  __typename?: 'TextConsistencyWith';
  inconsistentTexts?: Maybe<Array<Scalars['String']['output']>>;
};

export enum TravelDocumentType {
  TD1 = 'td1',
  TD2 = 'td2',
  TD3 = 'td3'
}

export type VideoInjection = {
  __typename?: 'VideoInjection';
  detected?: Maybe<Scalars['Boolean']['output']>;
  evaluated?: Maybe<Scalars['Boolean']['output']>;
};

export type VisualZoneConsistency = {
  __typename?: 'VisualZoneConsistency';
  consistencyWith?: Maybe<VisualZoneConsistencyWith>;
  consistent?: Maybe<Scalars['Boolean']['output']>;
};

export type VisualZoneConsistencyWith = {
  __typename?: 'VisualZoneConsistencyWith';
  barcodes?: Maybe<TextConsistencyWith>;
  mrz?: Maybe<TextConsistencyWith>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  CheckDigitsValidity: ( CheckDigitsValidityTd1Td2 ) | ( CheckDigitsValidityTd3 );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  MrzAttributes: ( Td1Mrz ) | ( Td2Mrz ) | ( Td3Mrz );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AgeDifferenceWith: ResolverTypeWrapper<AgeDifferenceWith>;
  BiometricMultiValueAttribute: ResolverTypeWrapper<BiometricMultiValueAttribute>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CheckDigitsValidity: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CheckDigitsValidity']>;
  CheckDigitsValidityTd1Td2: ResolverTypeWrapper<CheckDigitsValidityTd1Td2>;
  CheckDigitsValidityTd3: ResolverTypeWrapper<CheckDigitsValidityTd3>;
  ContactFormRequest: ContactFormRequest;
  CreateCustomerLivenessSelfieWarning: CreateCustomerLivenessSelfieWarning;
  CreateCustomerResponse: ResolverTypeWrapper<CreateCustomerResponse>;
  CreateDocumentPageResponse: ResolverTypeWrapper<CreateDocumentPageResponse>;
  CreateDocumentPageResponseErrorCode: CreateDocumentPageResponseErrorCode;
  CreateDocumentPageResponseWarning: CreateDocumentPageResponseWarning;
  CreateDocumentResponse: ResolverTypeWrapper<CreateDocumentResponse>;
  CreateLivenessRecordsErrorCode: CreateLivenessRecordsErrorCode;
  CreateLivenessRecordsResponse: ResolverTypeWrapper<CreateLivenessRecordsResponse>;
  CroppedImageLinks: CroppedImageLinks;
  CroppedImagesResponse: ResolverTypeWrapper<CroppedImagesResponse>;
  CroppedSelfieResponse: ResolverTypeWrapper<CroppedSelfieResponse>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerDocument: ResolverTypeWrapper<CustomerDocument>;
  CustomerDocumentLinks: ResolverTypeWrapper<CustomerDocumentLinks>;
  CustomerDocumentPages: ResolverTypeWrapper<CustomerDocumentPages>;
  CustomerLinks: ResolverTypeWrapper<CustomerLinks>;
  CustomerLiveness: ResolverTypeWrapper<CustomerLiveness>;
  CustomerSelfieInspection: ResolverTypeWrapper<CustomerSelfieInspection>;
  DetectFaceResponse: ResolverTypeWrapper<DetectFaceResponse>;
  DetectFaceResponseErrorCode: DetectFaceResponseErrorCode;
  DetectFaceResponseWarnings: DetectFaceResponseWarnings;
  DetectSelfieErrorCode: DetectSelfieErrorCode;
  DetectSelfieResponse: ResolverTypeWrapper<DetectSelfieResponse>;
  DetectSelfieWarnings: DetectSelfieWarnings;
  DocumentAdvice: DocumentAdvice;
  DocumentAgeDifferenceWith: ResolverTypeWrapper<DocumentAgeDifferenceWith>;
  DocumentClassificationAdvice: DocumentClassificationAdvice;
  DocumentCoordinates: ResolverTypeWrapper<DocumentCoordinates>;
  DocumentDetection: ResolverTypeWrapper<DocumentDetection>;
  DocumentGenderConsistency: ResolverTypeWrapper<DocumentGenderConsistency>;
  DocumentPageAdvice: DocumentPageAdvice;
  DocumentPageClassificationAdvice: DocumentPageClassificationAdvice;
  DocumentPageRequest: DocumentPageRequest;
  DocumentType: ResolverTypeWrapper<DocumentType>;
  EvaluateCustomerLivenessResponse: ResolverTypeWrapper<EvaluateCustomerLivenessResponse>;
  EvaluateLivenessErrorCode: EvaluateLivenessErrorCode;
  EvaluateLivenessType: EvaluateLivenessType;
  FaceAttribute: ResolverTypeWrapper<FaceAttribute>;
  FaceDetection: ResolverTypeWrapper<FaceDetection>;
  FaceDetectionProperties: FaceDetectionProperties;
  FaceDetectionPropertiesMode: FaceDetectionPropertiesMode;
  FaceQualityResponse: ResolverTypeWrapper<FaceQualityResponse>;
  FaceSizeRatio: FaceSizeRatio;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GenderConsistency: ResolverTypeWrapper<GenderConsistency>;
  GetAppInfoResponse: ResolverTypeWrapper<GetAppInfoResponse>;
  GetCustomerResponse: ResolverTypeWrapper<GetCustomerResponse>;
  GetMetadataResponse: ResolverTypeWrapper<GetMetadataResponse>;
  HeadPoseAttribute: ResolverTypeWrapper<HeadPoseAttribute>;
  Image: Image;
  ImageDimensions: ImageDimensions;
  ImageLink: ImageLink;
  InspectCustomerLinks: ResolverTypeWrapper<InspectCustomerLinks>;
  InspectCustomerResponse: ResolverTypeWrapper<InspectCustomerResponse>;
  InspectDocumentPortrait: ResolverTypeWrapper<InspectDocumentPortrait>;
  InspectDocumentResponse: ResolverTypeWrapper<InspectDocumentResponse>;
  InspectDocumentVisualZone: ResolverTypeWrapper<InspectDocumentVisualZone>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Links: ResolverTypeWrapper<Links>;
  LivenessRecordsDetection: ResolverTypeWrapper<LivenessRecordsDetection>;
  LivenessRecordsSelfieLink: ResolverTypeWrapper<LivenessRecordsSelfieLink>;
  MetadataDocument: ResolverTypeWrapper<MetadataDocument>;
  MetadataDocumentPage: ResolverTypeWrapper<MetadataDocumentPage>;
  MetadataDocumentType: ResolverTypeWrapper<MetadataDocumentType>;
  MetadataTextField: ResolverTypeWrapper<MetadataTextField>;
  Mrz: ResolverTypeWrapper<Mrz>;
  MrzAttributes: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MrzAttributes']>;
  MrzInspection: ResolverTypeWrapper<MrzInspection>;
  MultiValueAttribute: ResolverTypeWrapper<MultiValueAttribute>;
  MultivalueAttributeWithoutMrz: ResolverTypeWrapper<MultivalueAttributeWithoutMrz>;
  Mutation: ResolverTypeWrapper<{}>;
  OcrConfidence: ResolverTypeWrapper<OcrConfidence>;
  PageTamperingInspection: ResolverTypeWrapper<PageTamperingInspection>;
  Pages: Pages;
  ParsedDocumentType: ResolverTypeWrapper<ParsedDocumentType>;
  Point: ResolverTypeWrapper<Point>;
  Query: ResolverTypeWrapper<{}>;
  Roi: ResolverTypeWrapper<Roi>;
  SecurityInspection: ResolverTypeWrapper<SecurityInspection>;
  SelfLinks: ResolverTypeWrapper<SelfLinks>;
  SimilarityWith: ResolverTypeWrapper<SimilarityWith>;
  Source: Source;
  StoreCustomerApiError: ResolverTypeWrapper<StoreCustomerApiError>;
  StoreCustomerOnboardingStatus: StoreCustomerOnboardingStatus;
  StoreCustomerResponse: ResolverTypeWrapper<StoreCustomerResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Td1Mrz: ResolverTypeWrapper<Td1Mrz>;
  Td2Mrz: ResolverTypeWrapper<Td2Mrz>;
  Td3Mrz: ResolverTypeWrapper<Td3Mrz>;
  TextConsistencyWith: ResolverTypeWrapper<TextConsistencyWith>;
  TravelDocumentType: TravelDocumentType;
  VideoInjection: ResolverTypeWrapper<VideoInjection>;
  VisualZoneConsistency: ResolverTypeWrapper<VisualZoneConsistency>;
  VisualZoneConsistencyWith: ResolverTypeWrapper<VisualZoneConsistencyWith>;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AgeDifferenceWith: AgeDifferenceWith;
  BiometricMultiValueAttribute: BiometricMultiValueAttribute;
  Boolean: Scalars['Boolean']['output'];
  CheckDigitsValidity: ResolversUnionTypes<ResolversParentTypes>['CheckDigitsValidity'];
  CheckDigitsValidityTd1Td2: CheckDigitsValidityTd1Td2;
  CheckDigitsValidityTd3: CheckDigitsValidityTd3;
  ContactFormRequest: ContactFormRequest;
  CreateCustomerResponse: CreateCustomerResponse;
  CreateDocumentPageResponse: CreateDocumentPageResponse;
  CreateDocumentResponse: CreateDocumentResponse;
  CreateLivenessRecordsResponse: CreateLivenessRecordsResponse;
  CroppedImageLinks: CroppedImageLinks;
  CroppedImagesResponse: CroppedImagesResponse;
  CroppedSelfieResponse: CroppedSelfieResponse;
  Customer: Customer;
  CustomerDocument: CustomerDocument;
  CustomerDocumentLinks: CustomerDocumentLinks;
  CustomerDocumentPages: CustomerDocumentPages;
  CustomerLinks: CustomerLinks;
  CustomerLiveness: CustomerLiveness;
  CustomerSelfieInspection: CustomerSelfieInspection;
  DetectFaceResponse: DetectFaceResponse;
  DetectSelfieResponse: DetectSelfieResponse;
  DocumentAdvice: DocumentAdvice;
  DocumentAgeDifferenceWith: DocumentAgeDifferenceWith;
  DocumentClassificationAdvice: DocumentClassificationAdvice;
  DocumentCoordinates: DocumentCoordinates;
  DocumentDetection: DocumentDetection;
  DocumentGenderConsistency: DocumentGenderConsistency;
  DocumentPageAdvice: DocumentPageAdvice;
  DocumentPageClassificationAdvice: DocumentPageClassificationAdvice;
  DocumentPageRequest: DocumentPageRequest;
  DocumentType: DocumentType;
  EvaluateCustomerLivenessResponse: EvaluateCustomerLivenessResponse;
  FaceAttribute: FaceAttribute;
  FaceDetection: FaceDetection;
  FaceDetectionProperties: FaceDetectionProperties;
  FaceQualityResponse: FaceQualityResponse;
  FaceSizeRatio: FaceSizeRatio;
  Float: Scalars['Float']['output'];
  GenderConsistency: GenderConsistency;
  GetAppInfoResponse: GetAppInfoResponse;
  GetCustomerResponse: GetCustomerResponse;
  GetMetadataResponse: GetMetadataResponse;
  HeadPoseAttribute: HeadPoseAttribute;
  Image: Image;
  ImageDimensions: ImageDimensions;
  ImageLink: ImageLink;
  InspectCustomerLinks: InspectCustomerLinks;
  InspectCustomerResponse: InspectCustomerResponse;
  InspectDocumentPortrait: InspectDocumentPortrait;
  InspectDocumentResponse: InspectDocumentResponse;
  InspectDocumentVisualZone: InspectDocumentVisualZone;
  Int: Scalars['Int']['output'];
  Links: Links;
  LivenessRecordsDetection: LivenessRecordsDetection;
  LivenessRecordsSelfieLink: LivenessRecordsSelfieLink;
  MetadataDocument: MetadataDocument;
  MetadataDocumentPage: MetadataDocumentPage;
  MetadataDocumentType: MetadataDocumentType;
  MetadataTextField: MetadataTextField;
  Mrz: Mrz;
  MrzAttributes: ResolversInterfaceTypes<ResolversParentTypes>['MrzAttributes'];
  MrzInspection: MrzInspection;
  MultiValueAttribute: MultiValueAttribute;
  MultivalueAttributeWithoutMrz: MultivalueAttributeWithoutMrz;
  Mutation: {};
  OcrConfidence: OcrConfidence;
  PageTamperingInspection: PageTamperingInspection;
  Pages: Pages;
  ParsedDocumentType: ParsedDocumentType;
  Point: Point;
  Query: {};
  Roi: Roi;
  SecurityInspection: SecurityInspection;
  SelfLinks: SelfLinks;
  SimilarityWith: SimilarityWith;
  StoreCustomerApiError: StoreCustomerApiError;
  StoreCustomerResponse: StoreCustomerResponse;
  String: Scalars['String']['output'];
  Td1Mrz: Td1Mrz;
  Td2Mrz: Td2Mrz;
  Td3Mrz: Td3Mrz;
  TextConsistencyWith: TextConsistencyWith;
  VideoInjection: VideoInjection;
  VisualZoneConsistency: VisualZoneConsistency;
  VisualZoneConsistencyWith: VisualZoneConsistencyWith;
  Void: Scalars['Void']['output'];
};

export type AgeDifferenceWithResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgeDifferenceWith'] = ResolversParentTypes['AgeDifferenceWith']> = {
  dateOfBirth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  documentPortrait?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BiometricMultiValueAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BiometricMultiValueAttribute'] = ResolversParentTypes['BiometricMultiValueAttribute']> = {
  documentPortrait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mrz?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selfie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visualZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckDigitsValidityResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckDigitsValidity'] = ResolversParentTypes['CheckDigitsValidity']> = {
  __resolveType: TypeResolveFn<'CheckDigitsValidityTd1Td2' | 'CheckDigitsValidityTd3', ParentType, ContextType>;
};

export type CheckDigitsValidityTd1Td2Resolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckDigitsValidityTd1Td2'] = ResolversParentTypes['CheckDigitsValidityTd1Td2']> = {
  compositeCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateOfBirthCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateOfExpiryCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  documentNumberCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckDigitsValidityTd3Resolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckDigitsValidityTd3'] = ResolversParentTypes['CheckDigitsValidityTd3']> = {
  compositeCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateOfBirthCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dateOfExpiryCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  documentNumberCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  personalNumberCheckDigitValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCustomerResponse'] = ResolversParentTypes['CreateCustomerResponse']> = {
  links?: Resolver<ResolversTypes['SelfLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDocumentPageResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateDocumentPageResponse'] = ResolversParentTypes['CreateDocumentPageResponse']> = {
  detection?: Resolver<Maybe<ResolversTypes['DocumentDetection']>, ParentType, ContextType>;
  documentType?: Resolver<Maybe<ResolversTypes['DocumentType']>, ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['CreateDocumentPageResponseErrorCode']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['CustomerLinks'], ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<ResolversTypes['CreateDocumentPageResponseWarning']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDocumentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateDocumentResponse'] = ResolversParentTypes['CreateDocumentResponse']> = {
  links?: Resolver<ResolversTypes['SelfLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLivenessRecordsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLivenessRecordsResponse'] = ResolversParentTypes['CreateLivenessRecordsResponse']> = {
  customerLinks?: Resolver<ResolversTypes['CustomerLinks'], ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['CreateLivenessRecordsErrorCode']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['LivenessRecordsSelfieLink'], ParentType, ContextType>;
  selfie?: Resolver<Maybe<ResolversTypes['LivenessRecordsDetection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CroppedImagesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CroppedImagesResponse'] = ResolversParentTypes['CroppedImagesResponse']> = {
  fingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ghostPortrait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portrait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CroppedSelfieResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CroppedSelfieResponse'] = ResolversParentTypes['CroppedSelfieResponse']> = {
  selfie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  age?: Resolver<Maybe<ResolversTypes['BiometricMultiValueAttribute']>, ParentType, ContextType>;
  citizenship?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['CustomerDocument']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['BiometricMultiValueAttribute']>, ParentType, ContextType>;
  givenNames?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  personalNumber?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDocument'] = ResolversParentTypes['CustomerDocument']> = {
  additionalTexts?: Resolver<Maybe<Array<ResolversTypes['MultivalueAttributeWithoutMrz']>>, ParentType, ContextType>;
  dateOfExpiry?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  dateOfIssue?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  documentNumber?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  issuingAuthority?: Resolver<Maybe<ResolversTypes['MultiValueAttribute']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['CustomerDocumentLinks']>, ParentType, ContextType>;
  mrz?: Resolver<Maybe<ResolversTypes['Mrz']>, ParentType, ContextType>;
  pageTypes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  parsedType?: Resolver<ResolversTypes['ParsedDocumentType'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DocumentType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDocumentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDocumentLinks'] = ResolversParentTypes['CustomerDocumentLinks']> = {
  fingerprint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ghostPortrait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['CustomerDocumentPages']>, ParentType, ContextType>;
  portrait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDocumentPagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerDocumentPages'] = ResolversParentTypes['CustomerDocumentPages']> = {
  back?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unknown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerLinks'] = ResolversParentTypes['CustomerLinks']> = {
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerLivenessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerLiveness'] = ResolversParentTypes['CustomerLiveness']> = {
  errorCode?: Resolver<Maybe<ResolversTypes['EvaluateLivenessErrorCode']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerSelfieInspectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerSelfieInspection'] = ResolversParentTypes['CustomerSelfieInspection']> = {
  ageDifferenceWith?: Resolver<Maybe<ResolversTypes['AgeDifferenceWith']>, ParentType, ContextType>;
  ageEstimate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genderConsistency?: Resolver<Maybe<ResolversTypes['GenderConsistency']>, ParentType, ContextType>;
  genderEstimate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasMask?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  similarityWith?: Resolver<Maybe<ResolversTypes['SimilarityWith']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetectFaceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetectFaceResponse'] = ResolversParentTypes['DetectFaceResponse']> = {
  detection?: Resolver<Maybe<ResolversTypes['FaceDetection']>, ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['DetectFaceResponseErrorCode']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['SelfLinks']>, ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<ResolversTypes['DetectFaceResponseWarnings']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DetectSelfieResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DetectSelfieResponse'] = ResolversParentTypes['DetectSelfieResponse']> = {
  detection?: Resolver<Maybe<ResolversTypes['FaceDetection']>, ParentType, ContextType>;
  errorCode?: Resolver<Maybe<ResolversTypes['DetectSelfieErrorCode']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['Links'], ParentType, ContextType>;
  warnings?: Resolver<Maybe<Array<ResolversTypes['DetectSelfieWarnings']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentAgeDifferenceWithResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentAgeDifferenceWith'] = ResolversParentTypes['DocumentAgeDifferenceWith']> = {
  dateOfBirth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentCoordinatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentCoordinates'] = ResolversParentTypes['DocumentCoordinates']> = {
  bottomLeftCorner?: Resolver<ResolversTypes['Point'], ParentType, ContextType>;
  bottomRightCorner?: Resolver<ResolversTypes['Point'], ParentType, ContextType>;
  topLeftCorner?: Resolver<ResolversTypes['Point'], ParentType, ContextType>;
  topRightCorner?: Resolver<ResolversTypes['Point'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentDetectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentDetection'] = ResolversParentTypes['DocumentDetection']> = {
  confidence?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  coordinates?: Resolver<ResolversTypes['DocumentCoordinates'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentGenderConsistencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentGenderConsistency'] = ResolversParentTypes['DocumentGenderConsistency']> = {
  mrz?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viz?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentType'] = ResolversParentTypes['DocumentType']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  machineReadableTravelDocument?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvaluateCustomerLivenessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EvaluateCustomerLivenessResponse'] = ResolversParentTypes['EvaluateCustomerLivenessResponse']> = {
  links?: Resolver<ResolversTypes['CustomerLinks'], ParentType, ContextType>;
  liveness?: Resolver<Maybe<ResolversTypes['CustomerLiveness']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaceAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaceAttribute'] = ResolversParentTypes['FaceAttribute']> = {
  preconditionsMet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaceDetectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaceDetection'] = ResolversParentTypes['FaceDetection']> = {
  confidence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  faceRectangle?: Resolver<Maybe<ResolversTypes['Roi']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaceQualityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FaceQualityResponse'] = ResolversParentTypes['FaceQualityResponse']> = {
  backgroundUniformity?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  brightness?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  contrast?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  eyeDistance?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  eyeGaze?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  faceRelativeArea?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  faceRelativeAreaInImage?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  faceSize?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  heavyFrame?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  leftEye?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['SelfLinks'], ParentType, ContextType>;
  mouth?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  noseShadow?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  pitch?: Resolver<Maybe<ResolversTypes['HeadPoseAttribute']>, ParentType, ContextType>;
  redLeftEye?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  redRightEye?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  rightEye?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  roll?: Resolver<Maybe<ResolversTypes['HeadPoseAttribute']>, ParentType, ContextType>;
  shadow?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  sharpness?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  specularity?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  uniqueIntensityLevels?: Resolver<Maybe<ResolversTypes['FaceAttribute']>, ParentType, ContextType>;
  yaw?: Resolver<Maybe<ResolversTypes['HeadPoseAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderConsistencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenderConsistency'] = ResolversParentTypes['GenderConsistency']> = {
  documentPortrait?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mrz?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  viz?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAppInfoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAppInfoResponse'] = ResolversParentTypes['GetAppInfoResponse']> = {
  disVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iFaceVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  samVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetCustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetCustomerResponse'] = ResolversParentTypes['GetCustomerResponse']> = {
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['CustomerLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetMetadataResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetMetadataResponse'] = ResolversParentTypes['GetMetadataResponse']> = {
  documents?: Resolver<Array<ResolversTypes['MetadataDocument']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeadPoseAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeadPoseAttribute'] = ResolversParentTypes['HeadPoseAttribute']> = {
  angle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  preconditionsMet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspectCustomerLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspectCustomerLinks'] = ResolversParentTypes['InspectCustomerLinks']> = {
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentInspection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspectCustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspectCustomerResponse'] = ResolversParentTypes['InspectCustomerResponse']> = {
  links?: Resolver<ResolversTypes['InspectCustomerLinks'], ParentType, ContextType>;
  security?: Resolver<Maybe<ResolversTypes['SecurityInspection']>, ParentType, ContextType>;
  selfieInspection?: Resolver<Maybe<ResolversTypes['CustomerSelfieInspection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspectDocumentPortraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspectDocumentPortrait'] = ResolversParentTypes['InspectDocumentPortrait']> = {
  ageDifferenceWith?: Resolver<Maybe<ResolversTypes['DocumentAgeDifferenceWith']>, ParentType, ContextType>;
  ageEstimate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genderConsistency?: Resolver<Maybe<ResolversTypes['DocumentGenderConsistency']>, ParentType, ContextType>;
  genderEstimate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspectDocumentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspectDocumentResponse'] = ResolversParentTypes['InspectDocumentResponse']> = {
  expired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  links?: Resolver<ResolversTypes['CustomerLinks'], ParentType, ContextType>;
  mrzInspection?: Resolver<Maybe<ResolversTypes['MrzInspection']>, ParentType, ContextType>;
  pageTampering?: Resolver<Maybe<Array<ResolversTypes['PageTamperingInspection']>>, ParentType, ContextType>;
  portraitInspection?: Resolver<Maybe<ResolversTypes['InspectDocumentPortrait']>, ParentType, ContextType>;
  visualZoneInspection?: Resolver<Maybe<ResolversTypes['InspectDocumentVisualZone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspectDocumentVisualZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspectDocumentVisualZone'] = ResolversParentTypes['InspectDocumentVisualZone']> = {
  ocrConfidence?: Resolver<Maybe<ResolversTypes['OcrConfidence']>, ParentType, ContextType>;
  textConsistency?: Resolver<Maybe<ResolversTypes['VisualZoneConsistency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Links'] = ResolversParentTypes['Links']> = {
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  self?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LivenessRecordsDetectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LivenessRecordsDetection'] = ResolversParentTypes['LivenessRecordsDetection']> = {
  detection?: Resolver<Maybe<ResolversTypes['FaceDetection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LivenessRecordsSelfieLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['LivenessRecordsSelfieLink'] = ResolversParentTypes['LivenessRecordsSelfieLink']> = {
  selfie?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataDocument'] = ResolversParentTypes['MetadataDocument']> = {
  documentType?: Resolver<Maybe<ResolversTypes['MetadataDocumentType']>, ParentType, ContextType>;
  pages?: Resolver<Array<ResolversTypes['MetadataDocumentPage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataDocumentPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataDocumentPage'] = ResolversParentTypes['MetadataDocumentPage']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visualZone?: Resolver<Array<ResolversTypes['MetadataTextField']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataDocumentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataDocumentType'] = ResolversParentTypes['MetadataDocumentType']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  machineReadableTravelDocument?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataTextFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataTextField'] = ResolversParentTypes['MetadataTextField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  valueNormalized?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MrzResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mrz'] = ResolversParentTypes['Mrz']> = {
  td1?: Resolver<Maybe<ResolversTypes['Td1Mrz']>, ParentType, ContextType>;
  td2?: Resolver<Maybe<ResolversTypes['Td2Mrz']>, ParentType, ContextType>;
  td3?: Resolver<Maybe<ResolversTypes['Td3Mrz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MrzAttributesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MrzAttributes'] = ResolversParentTypes['MrzAttributes']> = {
  __resolveType: TypeResolveFn<'Td1Mrz' | 'Td2Mrz' | 'Td3Mrz', ParentType, ContextType>;
  checkDigitsValidity?: Resolver<ResolversTypes['CheckDigitsValidity'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfExpiry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuingAuthority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MrzInspectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MrzInspection'] = ResolversParentTypes['MrzInspection']> = {
  valid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiValueAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiValueAttribute'] = ResolversParentTypes['MultiValueAttribute']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mrz?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  visualZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultivalueAttributeWithoutMrzResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultivalueAttributeWithoutMrz'] = ResolversParentTypes['MultivalueAttributeWithoutMrz']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visualZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createDocumentPageWithContent?: Resolver<Maybe<ResolversTypes['CreateDocumentPageResponse']>, ParentType, ContextType, RequireFields<MutationCreateDocumentPageWithContentArgs, 'content' | 'isDocumentCreated'>>;
  createDocumentPageWithImage?: Resolver<Maybe<ResolversTypes['CreateDocumentPageResponse']>, ParentType, ContextType, RequireFields<MutationCreateDocumentPageWithImageArgs, 'image' | 'isDocumentCreated'>>;
  createFace?: Resolver<Maybe<ResolversTypes['DetectFaceResponse']>, ParentType, ContextType, RequireFields<MutationCreateFaceArgs, 'image'>>;
  createLivenessRecords?: Resolver<Maybe<ResolversTypes['CreateLivenessRecordsResponse']>, ParentType, ContextType, RequireFields<MutationCreateLivenessRecordsArgs, 'content'>>;
  createSelfie?: Resolver<Maybe<ResolversTypes['DetectSelfieResponse']>, ParentType, ContextType, Partial<MutationCreateSelfieArgs>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'customerApiLink'>>;
  postContactForm?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationPostContactFormArgs, 'contactFormData' | 'recaptchaToken'>>;
};

export type OcrConfidenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OcrConfidence'] = ResolversParentTypes['OcrConfidence']> = {
  confidence?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lowOcrConfidenceTexts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageTamperingInspectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageTamperingInspection'] = ResolversParentTypes['PageTamperingInspection']> = {
  colorProfileChangeDetected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  looksLikeScreenshot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParsedDocumentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParsedDocumentType'] = ResolversParentTypes['ParsedDocumentType']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  edition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDocumentSupported?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  machineReadableTravelDocument?: Resolver<Maybe<ResolversTypes['TravelDocumentType']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PointResolvers<ContextType = any, ParentType extends ResolversParentTypes['Point'] = ResolversParentTypes['Point']> = {
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  appInfo?: Resolver<Maybe<ResolversTypes['GetAppInfoResponse']>, ParentType, ContextType>;
  croppedImages?: Resolver<Maybe<ResolversTypes['CroppedImagesResponse']>, ParentType, ContextType, RequireFields<QueryCroppedImagesArgs, 'imageLinks'>>;
  croppedSelfie?: Resolver<Maybe<ResolversTypes['CroppedSelfieResponse']>, ParentType, ContextType, RequireFields<QueryCroppedSelfieArgs, 'faceApiLink'>>;
  customer?: Resolver<Maybe<ResolversTypes['GetCustomerResponse']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'customerApiLink'>>;
  evaluateCustomerLiveness?: Resolver<Maybe<ResolversTypes['EvaluateCustomerLivenessResponse']>, ParentType, ContextType, RequireFields<QueryEvaluateCustomerLivenessArgs, 'customerApiLink' | 'type'>>;
  faceQuality?: Resolver<Maybe<ResolversTypes['FaceQualityResponse']>, ParentType, ContextType, RequireFields<QueryFaceQualityArgs, 'faceApiLink'>>;
  inspectCustomer?: Resolver<Maybe<ResolversTypes['InspectCustomerResponse']>, ParentType, ContextType, RequireFields<QueryInspectCustomerArgs, 'customerApiLink'>>;
  inspectDocument?: Resolver<Maybe<ResolversTypes['InspectDocumentResponse']>, ParentType, ContextType, RequireFields<QueryInspectDocumentArgs, 'customerApiLink'>>;
  metadata?: Resolver<Maybe<ResolversTypes['GetMetadataResponse']>, ParentType, ContextType>;
  normalizedDocumentImages?: Resolver<Maybe<ResolversTypes['CustomerDocumentPages']>, ParentType, ContextType, RequireFields<QueryNormalizedDocumentImagesArgs, 'pages'>>;
  storeCustomer?: Resolver<Maybe<ResolversTypes['StoreCustomerResponse']>, ParentType, ContextType, RequireFields<QueryStoreCustomerArgs, 'customerApiLink' | 'onboardingStatus'>>;
};

export type RoiResolvers<ContextType = any, ParentType extends ResolversParentTypes['Roi'] = ResolversParentTypes['Roi']> = {
  bottomLeft?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  bottomRight?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  topLeft?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  topRight?: Resolver<Maybe<ResolversTypes['Point']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SecurityInspectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SecurityInspection'] = ResolversParentTypes['SecurityInspection']> = {
  videoInjection?: Resolver<Maybe<ResolversTypes['VideoInjection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SelfLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['SelfLinks'] = ResolversParentTypes['SelfLinks']> = {
  self?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SimilarityWithResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimilarityWith'] = ResolversParentTypes['SimilarityWith']> = {
  documentPortrait?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  livenessSelfies?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreCustomerApiErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreCustomerApiError'] = ResolversParentTypes['StoreCustomerApiError']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreCustomerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['StoreCustomerResponse'] = ResolversParentTypes['StoreCustomerResponse']> = {
  apiError?: Resolver<Maybe<ResolversTypes['StoreCustomerApiError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Td1MrzResolvers<ContextType = any, ParentType extends ResolversParentTypes['Td1Mrz'] = ResolversParentTypes['Td1Mrz']> = {
  checkDigitsValidity?: Resolver<ResolversTypes['CheckDigitsValidityTd1Td2'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfExpiry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuingAuthority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionalDataFirstLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  optionalDataSecondLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Td2MrzResolvers<ContextType = any, ParentType extends ResolversParentTypes['Td2Mrz'] = ResolversParentTypes['Td2Mrz']> = {
  checkDigitsValidity?: Resolver<ResolversTypes['CheckDigitsValidityTd1Td2'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfExpiry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuingAuthority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionalDataSecondLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Td3MrzResolvers<ContextType = any, ParentType extends ResolversParentTypes['Td3Mrz'] = ResolversParentTypes['Td3Mrz']> = {
  checkDigitsValidity?: Resolver<ResolversTypes['CheckDigitsValidityTd3'], ParentType, ContextType>;
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfExpiry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenNames?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuingAuthority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personalNumberOrOptionalDataSecondLine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextConsistencyWithResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextConsistencyWith'] = ResolversParentTypes['TextConsistencyWith']> = {
  inconsistentTexts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoInjectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VideoInjection'] = ResolversParentTypes['VideoInjection']> = {
  detected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  evaluated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisualZoneConsistencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['VisualZoneConsistency'] = ResolversParentTypes['VisualZoneConsistency']> = {
  consistencyWith?: Resolver<Maybe<ResolversTypes['VisualZoneConsistencyWith']>, ParentType, ContextType>;
  consistent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisualZoneConsistencyWithResolvers<ContextType = any, ParentType extends ResolversParentTypes['VisualZoneConsistencyWith'] = ResolversParentTypes['VisualZoneConsistencyWith']> = {
  barcodes?: Resolver<Maybe<ResolversTypes['TextConsistencyWith']>, ParentType, ContextType>;
  mrz?: Resolver<Maybe<ResolversTypes['TextConsistencyWith']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  AgeDifferenceWith?: AgeDifferenceWithResolvers<ContextType>;
  BiometricMultiValueAttribute?: BiometricMultiValueAttributeResolvers<ContextType>;
  CheckDigitsValidity?: CheckDigitsValidityResolvers<ContextType>;
  CheckDigitsValidityTd1Td2?: CheckDigitsValidityTd1Td2Resolvers<ContextType>;
  CheckDigitsValidityTd3?: CheckDigitsValidityTd3Resolvers<ContextType>;
  CreateCustomerResponse?: CreateCustomerResponseResolvers<ContextType>;
  CreateDocumentPageResponse?: CreateDocumentPageResponseResolvers<ContextType>;
  CreateDocumentResponse?: CreateDocumentResponseResolvers<ContextType>;
  CreateLivenessRecordsResponse?: CreateLivenessRecordsResponseResolvers<ContextType>;
  CroppedImagesResponse?: CroppedImagesResponseResolvers<ContextType>;
  CroppedSelfieResponse?: CroppedSelfieResponseResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerDocument?: CustomerDocumentResolvers<ContextType>;
  CustomerDocumentLinks?: CustomerDocumentLinksResolvers<ContextType>;
  CustomerDocumentPages?: CustomerDocumentPagesResolvers<ContextType>;
  CustomerLinks?: CustomerLinksResolvers<ContextType>;
  CustomerLiveness?: CustomerLivenessResolvers<ContextType>;
  CustomerSelfieInspection?: CustomerSelfieInspectionResolvers<ContextType>;
  DetectFaceResponse?: DetectFaceResponseResolvers<ContextType>;
  DetectSelfieResponse?: DetectSelfieResponseResolvers<ContextType>;
  DocumentAgeDifferenceWith?: DocumentAgeDifferenceWithResolvers<ContextType>;
  DocumentCoordinates?: DocumentCoordinatesResolvers<ContextType>;
  DocumentDetection?: DocumentDetectionResolvers<ContextType>;
  DocumentGenderConsistency?: DocumentGenderConsistencyResolvers<ContextType>;
  DocumentType?: DocumentTypeResolvers<ContextType>;
  EvaluateCustomerLivenessResponse?: EvaluateCustomerLivenessResponseResolvers<ContextType>;
  FaceAttribute?: FaceAttributeResolvers<ContextType>;
  FaceDetection?: FaceDetectionResolvers<ContextType>;
  FaceQualityResponse?: FaceQualityResponseResolvers<ContextType>;
  GenderConsistency?: GenderConsistencyResolvers<ContextType>;
  GetAppInfoResponse?: GetAppInfoResponseResolvers<ContextType>;
  GetCustomerResponse?: GetCustomerResponseResolvers<ContextType>;
  GetMetadataResponse?: GetMetadataResponseResolvers<ContextType>;
  HeadPoseAttribute?: HeadPoseAttributeResolvers<ContextType>;
  InspectCustomerLinks?: InspectCustomerLinksResolvers<ContextType>;
  InspectCustomerResponse?: InspectCustomerResponseResolvers<ContextType>;
  InspectDocumentPortrait?: InspectDocumentPortraitResolvers<ContextType>;
  InspectDocumentResponse?: InspectDocumentResponseResolvers<ContextType>;
  InspectDocumentVisualZone?: InspectDocumentVisualZoneResolvers<ContextType>;
  Links?: LinksResolvers<ContextType>;
  LivenessRecordsDetection?: LivenessRecordsDetectionResolvers<ContextType>;
  LivenessRecordsSelfieLink?: LivenessRecordsSelfieLinkResolvers<ContextType>;
  MetadataDocument?: MetadataDocumentResolvers<ContextType>;
  MetadataDocumentPage?: MetadataDocumentPageResolvers<ContextType>;
  MetadataDocumentType?: MetadataDocumentTypeResolvers<ContextType>;
  MetadataTextField?: MetadataTextFieldResolvers<ContextType>;
  Mrz?: MrzResolvers<ContextType>;
  MrzAttributes?: MrzAttributesResolvers<ContextType>;
  MrzInspection?: MrzInspectionResolvers<ContextType>;
  MultiValueAttribute?: MultiValueAttributeResolvers<ContextType>;
  MultivalueAttributeWithoutMrz?: MultivalueAttributeWithoutMrzResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OcrConfidence?: OcrConfidenceResolvers<ContextType>;
  PageTamperingInspection?: PageTamperingInspectionResolvers<ContextType>;
  ParsedDocumentType?: ParsedDocumentTypeResolvers<ContextType>;
  Point?: PointResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Roi?: RoiResolvers<ContextType>;
  SecurityInspection?: SecurityInspectionResolvers<ContextType>;
  SelfLinks?: SelfLinksResolvers<ContextType>;
  SimilarityWith?: SimilarityWithResolvers<ContextType>;
  StoreCustomerApiError?: StoreCustomerApiErrorResolvers<ContextType>;
  StoreCustomerResponse?: StoreCustomerResponseResolvers<ContextType>;
  Td1Mrz?: Td1MrzResolvers<ContextType>;
  Td2Mrz?: Td2MrzResolvers<ContextType>;
  Td3Mrz?: Td3MrzResolvers<ContextType>;
  TextConsistencyWith?: TextConsistencyWithResolvers<ContextType>;
  VideoInjection?: VideoInjectionResolvers<ContextType>;
  VisualZoneConsistency?: VisualZoneConsistencyResolvers<ContextType>;
  VisualZoneConsistencyWith?: VisualZoneConsistencyWithResolvers<ContextType>;
  Void?: GraphQLScalarType;
};

