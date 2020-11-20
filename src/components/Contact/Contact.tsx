import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import { getUserSession } from "../../redux/slices/sessionSlice";
import { ModalFormBody } from "../AppMenu/ModalWrapper";

export const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleModalButton = () => setOpen((prevState) => !prevState);
  const userSession = useSelector(getUserSession);
  return (
    <section className="contact">
      <div className="container text-center d-flex align-items-center flex-column">
        <svg
          className="contact__jug w-25"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 78.484 123.75999999999999"
          enableBackground="new 0 0 78.484 99.008"
        >
          <g>
            <path
              fill="#a78a6e"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.011,14.535c0.457,1.576,1.341-0.724,2.437-0.904   c0.107,0.631-0.778,0.331-0.792,0.852c0.829-0.671,3.042-2.733,4.612-1.528c1.303-2.069-0.125-5.925,2.206-7.759   c2.175-1.71,12.113-3.328,16.052-4.109c2.279-0.45,8.492-1.959,11.512-0.39c0.643,1.398,1.477,2.587,1.526,4.613   c1.689,0.036,2.586-0.841,3.828-0.402c0.32-0.055,0.215-0.507,0.247-0.832c1.8,0.075,2.287,0.196,3.535-0.943   c0.572,0.645,0.442,0.261,1.389,0.502C64.103-0.93,76.399,15.028,69.853,30.423c2.351,3.956,5.691,6.252,5.043,11.082   c0.061,0.309,0.279,0.141,0.272-0.012c1.301,5.556-1.995,13.603-5.69,18.304c2.581,2.648,3.277,8.655,3.958,11.663   c0.908-0.473-0.891-0.839-0.045-1.368c0.183-0.007,0.366-0.013,0.546-0.019c0.505,0.194-0.157,0.3-0.539,0.295   c0.124,1.081,0.946-0.343,0.85,0.791c0.24-0.088,1.177-0.781,0.521-0.839c2.054-0.053,3.942,0.167,3.693,3.717   c-1.269,0.416-3.152,3.396-6.468,3.509c0.693,3.849-2,6.877-4.077,9.193c-1.983,2.208-7.937,5.946-3.74,11.104   c0.492,0.019,0.563-0.357,1.088-0.312c0.231,0.838-0.735,0.555-0.503,1.389c-0.609-0.823-1.061,0.259-1.922,0.064   c-1.97-0.441-2.776-2.262-3.172-4.557c1.92-4.31,5.942-6.654,7.58-11.23c0.524-3.275,0.345-8.315-3.062-9.499   c-1.981-3.876-3.204-8.803-2.375-13.365c0.359-1.997,1.64-3.987,1.183-5.529c0.036-0.325,0.495-0.248,0.814-0.303   c0.021-0.492-0.353-0.565-0.309-1.088c0.752,1.271,1.038-0.626,0.5-1.387c0.269-0.001,0.225,0.326,0.293,0.537   c1.147-2.845,1.427-4.506,1.338-9.1c-1.472,2.342-0.081-2.113-2.265-2.121c0.465,0.99,0.889,0.375,0.877,1.615   c-0.783-0.388-1.823-0.508-1.711-1.86c-4.728-3.681-10.637-1.948-16.273-2.468c-3.444,1.93-8.61,1.87-9.763,3.347   c-0.877-1.691-2.379,2.106-4.09,0.688c-0.323,0.055-0.219,0.508-0.25,0.831c-0.341-0.109-0.574-0.332-0.577-0.803   c-0.398,0.422-0.374,1.243-1.334,1.143c0.633-1.107-0.299,0.212-0.565-0.53c-0.404,0.134,0.121,0.346,0.025,0.821   c-6.669,1.206-10.658,3.472-17.428,3.882c-0.496-0.183-0.059-0.497-0.029-0.82c-0.588-0.109-0.508,0.408-0.521,0.84   c-0.252-0.205-0.628-0.274-1.105-0.236c-0.115-0.464,0.194-0.525,0.528-0.567c-5.633-2.107-8.453-7.764-9.753-12.567   c-0.079-0.296-1.531-1.486-0.34-1.91c-0.052-0.32-0.507-0.213-0.828-0.246C0.428,26.54-1.703,16.888,4.011,14.535z M40.234,6.453   c0.295-1.8-0.179-2.339-0.412-4.101c-6.907-3.811-13.879,0.913-19.983,1.5c0.391,0.177-1.713,0.342-1.898,0.611   c0.215,0.053,0.325,0.22,0.292,0.54c-0.545,0.016-0.376-0.735-1.115-0.51c-0.094,0.475,0.431,0.688,0.03,0.822   C15.75,4.229,15.65,5.86,14.694,5.946c-0.006-0.365,0.475-0.269,0.533-0.568c-1.2-0.048-3.023,0.698-2.422,1.455   c0.292-0.286,1.309-1.224,1.627-0.604c-0.872,0.248-1.358,0.855-2.44,0.904c-0.368,3.141-0.909,6.354,0.855,9.026   c1.322-0.127,1.112-0.315,2.732-0.367c0.792-0.896,0.286-2.92-0.669-3.544c0.458-1.273,0.549-2.582,1.232-4.156   c5.477-1.833,13.353-4.551,20.152-4.524c0.812,0.455,1.337,1.22,1.188,2.703c0.685-0.066,0.87,0.395,1.125,0.786   c-1.724-0.684-0.691,1.688-0.459,2.759c1.216,0.071,2.118-0.145,2.723-0.64C40.776,8.145,41.077,6.686,40.234,6.453z M16.46,9.453   c0.22,1.055,0.034,0.976,0.329,1.634c3.854-1.413,14.889-3.927,19.599-4.779c-0.046-0.897-0.817-1.021-0.624-2.171   C29.686,4.844,21.789,6.326,16.46,9.453z M16.828,12.186c0.553,1.716,0.964,2.115,1.224,3.798   c-1.495,0.018-2.926,0.093-3.252,1.208c-0.409-1.007-2.6,0.968-3.578-0.428c0.643-0.798-0.382-2.229-0.651-2.996   c-3.424,1.534-9.794,1.266-9.088,7.167c-0.272,0.276-0.538,0.561-0.794,0.85c0.176,3.009,0.368,8.965,1.247,12.58   c1.107-0.049,0.308,1.943,1.174,2.153c0.019-0.333,0.059-0.647,0.528-0.564c-0.659,3.412,2.193,6.583,4.635,7.251   c-0.093,0.396-0.315,0.474,0.028,0.823c7.976,5.672,17.674-0.654,26.777-3.375c8.379-2.504,22.688-6.089,28.806-0.149   c-1.186-3.535-4.973-5.447-6.547-6.915c-0.334,0.694,0.844,1.111,0.046,1.372c0.027-0.954-1.018,0.656-1.13-1.06   c0.35,0.004,0.389,0.338,0.832,0.246c-0.259-1.199-3.145-1.853-2.761-0.457c-0.322-0.318-0.798-0.469-0.594-1.351   c-9.105-0.335-14.314-14.368-8.088-20.033c-0.602-0.391,0.176-0.676-0.318-1.36c1.459,0.698,2.066-2.411,3.224-2.032   c-0.217-0.051-0.326-0.216-0.293-0.538c3.003-1.612,5.359-3.242,9.188-4.151c-5.055-0.737-9.614,1.573-14.761,1.599   c-1.17,0.678,0.233,3.754-0.949,4.418c-1.512,0.011-2.874,1.001-4.074,1.237c-1.189-1.469-0.031-3.884-2.342-4.311   C31.475,9.271,23.918,9.781,16.828,12.186z M47.268,27.894c-0.076-0.297-0.471-0.644-0.556-0.256   c3.295,0.249,7.568-1.359,11.756-1.218c4.738,0.155,7.834,1.645,10.272,3.495c-0.021-1.454,0.145-0.331,0.548-0.019   c2.374-7.489,0.693-22.712-8.205-23.596c0.21-0.889-0.916-0.347-0.861-1.069c-10.028,0.296-15.113,5.808-16.511,14.827   c-0.003-0.151-0.232-0.305-0.272,0.009C44.627,22.667,45.34,26.222,47.268,27.894z M70.507,17.231   c-0.147-0.979-0.143-2.122-0.905-2.439C69.743,15.779,70.028,16.606,70.507,17.231z M70.928,21.607   c-0.15-0.896,0.152-3.743-0.383-3.281c0.203,1.016-0.125,3.968,0.109,3.29C70.749,21.613,70.837,21.611,70.928,21.607z    M69.344,31.539c-0.071,0.247-0.7,1.225-0.801,0.575c0.942-1.386-2.326-1.684-1.741-2.684c-0.851,0.336-0.725-0.054-1.36,0.32   c-0.38-1.699-1.997-0.686-2.53-1.837c-2.391-0.145-10.445-1.161-14.51,1.038c0.77,0.827,1.892,1.707,3.356,1.81   c-0.282,0.006-0.361-0.47-0.021-0.549c0.289,0.572,1.706-0.644,2.202,0.203c-0.584,0.601-1.536-0.37-1.897,0.611   c2.185,0.818,4.977,2.066,6.933,2.235c0.008,0.36-0.471,0.267-0.53,0.567c3.483,2.141,6.287,5.011,7.46,9.625   c0.362,0.372,1.35,0.075,1.396,0.778c-0.536,0.569-0.724,0.095-1.104-0.236c0.74,7.708-3.801,13.094-3.224,18.218   c-0.069-0.211-0.025-0.539-0.29-0.539c0.257,2.18-0.804,9.55,2.521,9.792c-0.273,0.01-0.549,0.02-0.819,0.029   c1.26,2.529,2.737,4.831,6.204,5.003c-0.18-0.481,0.766-1.163-0.046-1.371c-0.035,0.323,0.071,0.776-0.245,0.832   c-2.626-0.563-4.627-3.109-4.316-5.892c0.007,0.154-0.215,0.319-0.271,0.012c1.142-2.818,1.183-7.103,2.669-10.245   c0.407-0.942-1.202-1.129-0.33-1.636c0.363-0.009,0.267,0.472,0.565,0.529c0.118-1.376,2.287-3.293,1.014-2.503   c0.473-1.948,2.517-3.542,3.427-4.231c-0.321-0.036-0.315-0.422-0.304-0.813c3.088-4.68,0.864-14.008-2.228-17.214   c0.295-0.072,0.644-0.47,0.255-0.555C70.045,34.086,69.258,31.855,69.344,31.539z M68.586,74.094   c0.115,0.639,0.316,1.174,0.868,1.346c0.055-0.214-0.011-0.541,0.256-0.558c0,0.473,0.237,0.694,0.575,0.804   C70.109,74.116,69.127,75.173,68.586,74.094z M67.483,73.857c0.009-0.164,0.027-0.323,0.263-0.282   c0.003,0.472,0.234,0.695,0.573,0.804c-0.262-0.664-0.298-1.57-1.148-1.606C67.228,73.182,67.105,73.787,67.483,73.857z    M71.622,74.542c1.474-3.792,0.579-10.731-2.384-13.64C67.304,64.715,66.234,73.58,71.622,74.542z M67.16,72.497   c-0.204-3.165-1.071-2.083-0.272,0.012c-0.276,0.011-0.328,0.491,0.017,0.548C66.958,72.842,66.897,72.516,67.16,72.497z    M73.522,73.929c-0.378-1.116-0.756,0.17-1.079,0.587c2.163,1.514,4.112,0.058,5.423-1.831c-0.333-0.4-0.811-0.642-0.869-1.344   C74.416,70.87,74.328,72.739,73.522,73.929z M71.135,76.479c1.056,0.608,3.821-0.116,3.261-0.934   C73.142,75.817,73.004,76.382,71.135,76.479z M66.799,86.229c2.369-2.054,5.273-5.462,4.362-8.929   c-1.166,0.476-2.543-0.47-3.597-0.977C69.248,79.437,67.447,84.498,66.799,86.229z M63.363,98.146   c-2.22-1.377-1.681-5.365-1.064-7.1C60.78,92.879,59.292,97.975,63.363,98.146z"
            />
          </g>
        </svg>
        {userSession ? null : (
          <>
            <h2 className="contact__heading display-4 text-center">
              Get in touch
            </h2>
            <p className="contact__subheading text-center">
              So are you ready to join us? Then click that button below!
            </p>

            <button
              className="nav-link nav-link__button"
              onClick={handleModalButton}
            >
              Join us!
            </button>
          </>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleModalButton}
        center
        styles={{
          modal: { backgroundColor: "#181818" },
          closeButton: { fill: "#efe3c3" },
        }}
      >
        <ModalFormBody closeModal={setOpen} />
      </Modal>
    </section>
  );
};
