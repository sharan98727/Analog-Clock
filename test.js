
const chai = window.chai
const expect = chai.expect

describe('setClock', () => {
  it('should set the hours, minutes and seconds hands', () => {
    expect(setClock(4, 30, 0)).to.deep.equal([135, 180, 0])
  })
})

describe('Angle Difference between Hours hand and Mnutes Hand', () => {
    it('should set the angle', () => {
      expect(setHoursMinutesAngle(525, 180)).to.equal(345)
    })
})