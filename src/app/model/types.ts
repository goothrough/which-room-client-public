export type ZoomStatus = {
    userName: string,
    roomName: string,
    roomDisplayName: string,
    roomStatus: string,
    joinUrl: string
}

export type ZoomStatusResponse = {
    zoomStatusList: ZoomStatus[],
    requestTimeStamp: string
}