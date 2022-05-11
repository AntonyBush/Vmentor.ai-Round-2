import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <a className='btn btn-outline-light btn-floating m-1' href='mailto:antonybush95@gmail.com' target="_blank" role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/antony-bush-56741120a/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/AntonyBush' target="_blank" role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Developed by: Antony Bush 
        <br></br>For More Info: 
        &nbsp;
        <a className='text-white' target="_blank" href='https://github.com/AntonyBush/Vmentor.ai-Round-2/'>
        Click Here
        </a>
      </div>
    </MDBFooter>
  );
}