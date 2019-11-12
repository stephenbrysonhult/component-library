import React from "react";
import Button from "./components/button";
import Color from "./components/color";
import Input from "./components/input";
import Library from "./components/library";
import Container from "./components/container";
import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <Container>
        <div className="g--spacer g--spacer--xlarge" />
        <h1 className="g--margin-none">Component library</h1>
        <div className="g--spacer g--spacer--small" />
        <p className="g--margin-none">by Stephen Bryson, v1.0.0</p>
        <div className="g--spacer g--spacer--large" />
      </Container>
      <Library title="Colors">
        <div className="row row--gutters-small">
          <div className="row__column row__column--20 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Blacks</p>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="rgba(0,0,0,0.05)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Black 5%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="rgba(0,0,0,0.40)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Black 40%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="rgba(0,0,0,0.60)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Black 60%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="rgba(0,0,0,0.80)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Black 80%</span>
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--20 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Whites</p>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color border value="rgba(255,255,255,.40)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">White 40%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color border value="rgba(255,255,255,.60)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">White 60%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color border value="rgba(255,255,255,.80)"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">White 80%</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color border value="#FFFFFF"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">#FFFFFF</span>
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--20 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Brand</p>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="#2A29A4"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">#2A29A4</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="#85D0F1"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">#85D0F1</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="#FF5A5F"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">#FF5A5F</span>
          </div>
          <div className="row__column row__column--20 row__column--tablet-33 row__column--mobile-50">
            <Color value="#2B2B2B"/>
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">#2B2B2B</span>
          </div>
        </div>
      </Library>
      <Library title="Buttons">
        <div className="row row--gutters-small">
          <div className="row__column row__column--25 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Secondary</p>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Default</span>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button icon="rocket" />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">With icon</span>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button icon="rocket" disabled />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Disabled</span>
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--25 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Call to action</p>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button variant="cta" />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Default</span>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button variant="cta" icon="rocket" />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">With icon</span>
          </div>
          <div className="row__column row__column--25 row__column--tablet-50 row__column--mobile-100">
            <Button variant="cta" icon="rocket" disabled />
            <div className="g--spacer g--spacer--small" />
            <span className="g--margin-none">Disabled</span>
          </div>
        </div>
      </Library>
      <Library title="Forms">
        <div className="row row--gutters-small">
          <div className="row__column row__column--33 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Email</p>
          </div>
          <div className="row__column row__column--66 row__column--tablet-100">
            <Input
              placeholder="Email address"
              type="email"
              icon="envelope"
              name="email"
            />
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--33 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Name</p>
          </div>
          <div className="row__column row__column--33 row__column--tablet-100">
            <Input
              placeholder="First name"
              type="text"
              icon="user"
              name="name"
            />
          </div>
          <div className="row__column row__column--33 row__column--tablet-100">
            <Input
              placeholder="Last name"
              type="text"
              icon="user"
              name="name"
            />
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--33 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Password</p>
          </div>
          <div className="row__column row__column--66 row__column--tablet-100">
            <Input
              placeholder="Password"
              type="password"
              icon="lock"
              name="password"
            />
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--33 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Select</p>
          </div>
          <div className="row__column row__column--66 row__column--tablet-100">
            <Input
              id="country"
              type="select"
              placeholder="Country of residence"
            >
              <option title="" key="" value="">
                Option
              </option>
            </Input>
          </div>
        </div>
        <div className="g--spacer" />
        <div className="row row--gutters-small">
          <div className="row__column row__column--33 row__column--tablet-100">
            <p className="g--font-h4 g--margin-none">Checkbox</p>
          </div>
          <div className="row__column row__column--66 row__column--tablet-100">
            <Input
              id="agree"
              type="checkbox"
              label="I agree to the terms of use."
            />
          </div>
        </div>
      </Library>
      <div className="g--spacer g--spacer--xlarge" />
    </>
  );
}

export default App;
