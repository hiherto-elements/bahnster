/** @module types */
// Auto-generated, edits will be overwritten

/**
 * @typedef Address
 * @memberof module:types
 * 
 * @property {string} city 
 * @property {string} houseNumber 
 * @property {string} street 
 * @property {number} zipcode 
 */

/**
 * @typedef Aufgabentraeger
 * @memberof module:types
 * 
 * @property {string} name full name of Aufgabentraeger
 * @property {string} shortname unique identifier
 */

/**
 * @typedef EVANumber
 * @memberof module:types
 * 
 * @property {module:types.GeographicPoint} geographicCoordinate 
 * @property {boolean} isMain station related EVA-Numbers
 * @property {number} number EVA identifier
 */

/**
 * @typedef Error
 * @memberof module:types
 * 
 * @property {string} errMsg error message
 * @property {number} errNo error number
 */

/**
 * @typedef GeographicPoint
 * @memberof module:types
 * 
 * @property {number[]} coordinates first value is longitude, second latitude third altitude (currently not provided)
 * @property {string} type the type of the GEOJSON Object e.g. point. Currently only point coordinates without altitude are provided.
 */

/**
 * @typedef OpeningHours
 * @memberof module:types
 * 
 * @property {date} fromTime 
 * @property {date} toTime 
 */

/**
 * @typedef RegionalBereichRef
 * @memberof module:types
 * 
 * @property {string} name name of the regional department
 * @property {number} number unique identifier of the regional department
 * @property {string} shortName 
 */

/**
 * @typedef Regionalbereich
 * @memberof module:types
 * 
 * @property {string} name name of the regional department
 * @property {number} number unique identifier of the regional department
 * @property {string} shortName 
 */

/**
 * @typedef RiL100Identifier
 * @memberof module:types
 * 
 * @property {module:types.GeographicPoint} geographicCoordinate 
 * @property {boolean} hasSteamPermission permission for steam engines y/n
 * @property {boolean} isMain is stations main Ril100. Determination of Station&Service AG
 * @property {string} rilIdentifier Unique identifier of 'Betriebsstelle' according to Ril100
 */

/**
 * @typedef SZentrale
 * @memberof module:types
 * 
 * @property {module:types.Address} address 
 * @property {string} email email adress of the 3-S-Zentrale (no longer supported!)
 * @property {string} internalFaxNumber internal fax number
 * @property {string} internalPhoneNumber internal phone number
 * @property {string} mobilePhoneNumber mobile phone number (no longer supported!)
 * @property {string} name unique identifier of 3SZentrale
 * @property {number} number unique identifier for SZentrale
 * @property {string} publicFaxNumber public fax number
 * @property {string} publicPhoneNumber 
 */

/**
 * @typedef SZentraleQuery
 * @memberof module:types
 * 
 * @property {number} limit maximum number of result objects to be returned
 * @property {number} offset offset of the first result object with respect to the total number of  hits produced by the query
 * @property {module:types.SZentrale[]} result result objects produced by that query
 * @property {number} total total number of hits produced by that query
 */

/**
 * @typedef SZentraleRef
 * @memberof module:types
 * 
 * @property {string} name unique identifier of 3SZentrale
 * @property {number} number unique identifier for SZentrale
 * @property {string} publicPhoneNumber 
 */

/**
 * @typedef Schedule
 * @memberof module:types
 * 
 * @property {module:types.OpeningHours} friday 
 * @property {module:types.OpeningHours} holiday 
 * @property {module:types.OpeningHours} monday 
 * @property {module:types.OpeningHours} saturday 
 * @property {module:types.OpeningHours} sunday 
 * @property {module:types.OpeningHours} thursday 
 * @property {module:types.OpeningHours} tuesday 
 * @property {module:types.OpeningHours} wednesday 
 */

/**
 * @typedef Station
 * @memberof module:types
 * 
 * @property {module:types.Schedule} DBinformation 
 * @property {module:types.Aufgabentraeger} aufgabentraeger 
 * @property {number} category the stations category (-1...7). Stations with category -1 or 0 are not in production, e.g. planned, saled, without train stops.
 * @property {module:types.EVANumber[]} evaNumbers station related EVA-Numbers
 * @property {string} federalState german federal state
 * @property {boolean} hasBicycleParking public bicycle parking y/n
 * @property {boolean} hasCarRental car sharing or car rental y/n
 * @property {boolean} hasDBLounge DB lounge y/n
 * @property {boolean} hasLocalPublicTransport local public transport y/n
 * @property {boolean} hasLockerSystem public facilities y/n
 * @property {boolean} hasLostAndFound lost and found y/n
 * @property {string} hasMobilityService values are 'no', 'yes, advance notification is requested...' or 'yes, advance notification is required...'
 * @property {boolean} hasParking public parking y/n
 * @property {boolean} hasPublicFacilities public facilities y/n
 * @property {boolean} hasRailwayMission railway mission y/n
 * @property {module:types.Partial} hasSteplessAccess stepless access is availiable yes, no or partial
 * @property {boolean} hasTaxiRank taxi rank in front of the station y/n
 * @property {boolean} hasTravelCenter local travel center y/n
 * @property {boolean} hasTravelNecessities a shop for travel necessities y/n
 * @property {boolean} hasWiFi public Wi-Fi is available y/n
 * @property {module:types.Schedule} localServiceStaff 
 * @property {module:types.Address} mailingAdress mailing address of the railway station
 * @property {string} name the stations name
 * @property {number} number unique identifier representing a specific railway station
 * @property {number} priceCategory determines in some respect the price for train stops at a specific station (1..7)
 * @property {module:types.RegionalBereichRef} regionalbereich 
 * @property {module:types.RiL100Identifier[]} riL100Identifiers station related Ril100s
 * @property {module:types.StationManagementRef} stationManagement 
 * @property {module:types.SZentraleRef} szentrale 
 * @property {module:types.TimetableOffice} timetableOffice 
 */

/**
 * @typedef StationManagement
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {number} number identifier
 */

/**
 * @typedef StationManagementRef
 * @memberof module:types
 * 
 * @property {string} name 
 * @property {number} number identifier
 */

/**
 * @typedef StationQuery
 * @memberof module:types
 * 
 * @property {number} limit maximum number of result objects to be returned
 * @property {number} offset offset of the first result object with respect to the total number  of hits produced by the query
 * @property {module:types.Station[]} result result objects produced by that query
 * @property {number} total total number of hits produced by that query
 */

/**
 * @typedef TimetableOffice
 * @memberof module:types
 * 
 * @property {string} email email
 * @property {string} name identifier
 */
